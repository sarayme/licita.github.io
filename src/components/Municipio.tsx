"use client"
import { BackIcon } from "@/assets/svgs/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { If, Then } from "react-if";
import Title from "./Title";
import Charts from "./charts/Charts";
import { anoSelect } from "../app/pb/[municipio]/[ano]/anos"
import { useMemo } from "react";
interface MunicipioProps {
    municipioId: string;
    children: React.ReactNode;
    backActive?: boolean;
    ano: string;
}



export default function Municipio({
                                      municipioId,
                                      children,
                                      backActive,
                                      ano
                                  }: MunicipioProps) {
    const listaAnos = useMemo(() => anoSelect, []);
    const router = useRouter();
    const selecionarMunicipio = (e: any) => {
        router.push(`/pb/${e.target.value}`);
    }
    const selecionarAno = (e: any) => {
        const valor = e.target.value;
        if (backActive === false) {
            router.push(`/pb/geral/${valor}`);
        } else if (backActive === true && municipioId === "geral" && valor !== "geral") {
            router.push(`/pb/geral/${valor}`);
        } else if (backActive === true && valor === "geral" && municipioId === "geral") {
            router.push(`/`);
        }
        else if (backActive === true && municipioId !== "geral" && valor === "geral") {
            router.push(`/pb/${municipioId}/`);
        } else {
            router.push(`/pb/${municipioId}/${valor}`);
        }
    }

    return (
        <main>
            <header className="flex gap-x-6 flex-row lg:flex-row gap-y-3 ">
                <If condition={backActive}>
                    <Then>
                        <Link
                            href="/"
                            className="bg-[#152544] px-6 pt-5 rounded-[82px] w-[4.5rem] h-16"
                        >
                            <BackIcon />
                        </Link>
                    </Then>
                </If>
                <Title municipio={municipioId} ano={ano} />
            </header>
            <div className="mt-4 mb-5">
                <p className="font-normal text-[#7C828A] mt-2">
                    Coletamos os diários oficiais municipais a partir da plataforma do Querido Diário. Escolhendo a
                    localidade em um determinado período, te apresentaremos as licitações que ocorreram.
                </p>
            </div>
            <div className="gap-x-5 gap-y-5 md:mx-[25%] flex flex-col xl:flex-row ">
                <select
                    className="md:w-[28.56rem] h-16 md:p-4 rounded-2xl text-lg"
                    id="municipio-select"
                    onChange={selecionarMunicipio}
                    value={municipioId}
                >
                <option value="geral" selected>
                        Escolha uma cidade da Paraíba
                    </option>
                    <option value="joao-pessoa">João Pessoa</option>
                </select>
                <select
                    className="md:w-[28.56rem] h-16 p-4 rounded-2xl text-lg"
                    id="municipio-select" value={ano}
                    onChange={selecionarAno}>
                    <option value="geral">
                        Todos os anos
                    </option>
                    {listaAnos.map(({ ano }) => (
                        <option key={ano} value={ano}>
                            {ano}
                        </option>
                    ))}
                </select>
            </div>
            <main className="flex flex-col gap-y-6 3xl:mb-14 mb-8">
                <Charts>
                    {children}
                </Charts>
            </main>
        </main>
    );
}