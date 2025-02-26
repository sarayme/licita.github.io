"use client";
import React, { useEffect, useState } from "react";

interface Licitacao {
    objeto: string;
    empresa: string;
    valor_total: string;
}

interface DetalhesLicitacoes {
    [mes: string]: {
        num_diarios: number;
        num_contratos: number;
        total_gasto: number;
        empresas_mensais: Licitacao[];
    };
}

interface TabelaLicitacoesProps {
    municipio: string;
    ano: string;
}

const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

export default function TabelaLicitacoes({ municipio, ano }: TabelaLicitacoesProps) {
    const [detalhe, setDetalhes] = useState<DetalhesLicitacoes>({});

    useEffect(() => {
        const url = `https://raw.githubusercontent.com/AmandaFerreira-prog/extrator_licita/refs/heads/main/json/empresas/${municipio}.json`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.detalhe[ano]) {
                    setDetalhes(data.detalhe[ano]);
                }
            });
    }, [municipio, ano]);

    const renderLicitações = (licitacoesDoMes: Licitacao[], mes: string) => {
        const seen = new Set();
        return licitacoesDoMes
            .filter((licitacao) => {
                const key = `${licitacao.objeto}-${licitacao.empresa}-${licitacao.valor_total}`;
                if (seen.has(key)) {
                    return false;
                }
                seen.add(key);
                return true;
            })
            .map((licitacao, idx) => (
                <tr key={`${licitacao.objeto}-${licitacao.empresa}`} className="border-t">
                    {idx === 0 && (
                        <td
                            className="px-4 py-2 font-semibold"
                            rowSpan={licitacoesDoMes.length}
                        >
                            {mes}
                        </td>
                    )}
                    <td className="px-4 py-2">{licitacao.objeto}</td>
                    <td className="px-4 py-2">{licitacao.empresa}</td>
                </tr>
            ));
    };

    return (
        <div className="overflow-x-auto mt-6">
            <table className="min-w-full text-left table-auto">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Mês</th>
                        <th className="px-4 py-2">Objeto</th>
                        <th className="px-4 py-2">Empresa</th>
                    </tr>
                </thead>
                <tbody>
                    {meses.map((mes, index) => {
                        const numeroMes = (index + 1).toString(); 
                        const licitacoesDoMes = detalhe[numeroMes]?.empresas_mensais || [];

                        return licitacoesDoMes.length > 0 ? (
                            renderLicitações(licitacoesDoMes, mes)
                        ) : (
                            <tr key={numeroMes} className="border-t">
                                <td className="px-4 py-2 font-semibold">{mes}</td>
                                <td className="px-4 py-2" colSpan={3}>
                                    Não identificado
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}