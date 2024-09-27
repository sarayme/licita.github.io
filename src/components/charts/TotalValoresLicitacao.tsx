"use client"
import React, { useMemo, useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Detalhe {
  resumo: {
    total_licitacoes: number;
    valor_total: string;
  };
  total_licitacoes: number;
  valor_total: string;
}

interface DetalheAno {
  total_licitacoes: number;
  valor_total: string;
}

interface TotalLicitacoesProps {
  municipio: string;
  ano: "todos" | string;
}

export default function TotalValoresLicitacoes({ municipio, ano }: TotalLicitacoesProps) {
  const [dataValores, setDataValores] = useState<number[]>([]);
  const mostrarTodosAnos = ano === "todos";

  function dadosGeraisAnos(){
    const url =
        municipio === "geral"
            ? "https://raw.githubusercontent.com/AmandaFerreira-prog/extrator_licita/main/docs/joao-pessoa.json"
            : `https://raw.githubusercontent.com/AmandaFerreira-prog/extrator_licita/main/docs/${municipio}.json`;
    console.log("aqui");

    fetch(url, {})
        .then((res) => res.json())
        .then((data) => {
          const detalhe = data.detalhe as Record<string, Detalhe>;
          const licitacoes: number[] = [];
          const valores: number[] = [];
          // const primeiroAnoComDados = Number(Object.keys(detalhe).sort()[0]);
          //
          // for (let ano = 2014; ano < primeiroAnoComDados; ano++) {
          //     licitacoes.push(0);
          // }

          Object.values(detalhe).forEach((elemento) => {
            let licitacao = elemento.resumo.total_licitacoes
            licitacoes.push(licitacao);
            valores.push(parseFloat(elemento.resumo.valor_total.replace(/[^0-9,-]+/g,"").replace(",", ".")));
          });
          console.log(licitacoes)
          setDataValores(valores);
        });
  }

  function dadosAno() {
    const url = `https://raw.githubusercontent.com/AmandaFerreira-prog/extrator_licita/main/docs/${municipio}.json`;

    fetch(url, {})
        .then((res) => res.json())
        .then((data) => {
          const detalhe = data.detalhe[ano] as Record<string, DetalheAno>;
          const licitacoes: number[] = Array(12).fill(0);
          const valores: number[] = Array(12).fill(0);

          Object.entries(detalhe).forEach(([mes, dados]) => {
            if (mes !== "resumo") {
              const index = Number(mes) - 1;
              licitacoes[index] = dados.total_licitacoes;
              valores[index] = parseFloat(dados.valor_total.replace(/[^0-9,-]+/g,"").replace(",", "."));
            }
          });
          setDataValores(valores);
        });
  }

  useEffect(() => {
    mostrarTodosAnos ? dadosGeraisAnos() : dadosAno();
  }, [municipio, ano]);

  const chartData = useMemo(() => {
    return {
      options: {
        series: [
          {
            name: "Valor Total (R$)",
            data: dataValores,
          },
        ],
          xaxis: {
              categories: mostrarTodosAnos? [
                  "2014",
                  "2015",
                  "2016",
                  "2017",
                  "2018",
                  "2019",
                  "2020",
                  "2021",
                  "2022",
                  "2023",
              ] : ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
              labels: {
                  style: {
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontSize: "10" as const,
                      fontWeight: 800,
                  },
              },
          },
        yaxis: {
          labels: {
            formatter: (val: number) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
            columnWidth: "60%",
          },
        },
        colors: ["#FF6347"],
      },
    };
  }, [dataValores]);

  return (
      <section className="bg-white w-full h-[19rem] mt-[1.875rem] px-2 rounded-3xl">
        <h1 className="mb-3 font-bold text-xl text-center pt-5">
          Valores de Licitações por Período
        </h1>
        <Chart
            options={chartData.options}
            series={chartData.options.series}
            type="bar"
            width="100%"
            height="70%"
        />
      </section>
  );
}
