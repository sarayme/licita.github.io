"use client";
import React, { useEffect, useState } from "react";

interface Licitacao {
    objeto: string;
    empresa: string;
    valor_total: string;
}

interface DetalhesLicitacoes {
    [mes: string]: Licitacao[];
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
    const [detalhes, setDetalhes] = useState<DetalhesLicitacoes>({});

    useEffect(() => {
        const url = `https://raw.githubusercontent.com/AmandaFerreira-prog/extrator_licita/main/docs/empresas-${municipio}.json`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.detalhes[ano]) {
                    setDetalhes(data.detalhes[ano]);
                }
            });
    }, [municipio, ano]);

    return (
        <div className="overflow-x-auto mt-6">
            <table className="min-w-full text-left table-auto">
                <thead>
                <tr className="bg-gray-200">
                    <th className="px-4 py-2">Mês</th>
                    <th className="px-4 py-2">Objeto</th>
                    <th className="px-4 py-2">Empresa</th>
                    <th className="px-4 py-2">Valor Total</th>
                </tr>
                </thead>
                <tbody>
                {meses.map((mes, index) => {
                    const numeroMes = (index + 1).toString().padStart(2, "0");
                    const licitacoesDoMes = detalhes[numeroMes] || [];

                    return licitacoesDoMes.length > 0 ? (
                        licitacoesDoMes.map((licitacao, idx) => (
                            <tr key={`${numeroMes}-${idx}`} className="border-t">
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
                                <td className="px-4 py-2">{licitacao.valor_total}</td>
                            </tr>
                        ))
                    ) : (
                        <tr key={numeroMes} className="border-t">
                            <td className="px-4 py-2 font-semibold">{mes}</td>
                            <td className="px-4 py-2" colSpan={3}>
                                Nenhuma licitação
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
