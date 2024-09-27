"use client";
import Footer from "@/components/Footer";
import CidadesExoneracao from "@/components/charts/CidadesExoneracao";
import CidadesNomeacao from "@/components/charts/CidadesNomeacao";
import TotalAtos from "@/components/charts/TotalAtos";
import { MainLayout } from "@/layouts/MainLayout";
import Municipio from "@/components/Municipio";
import Head from "next/head";
import TotalLicitacoes from "@/components/charts/TotalLicitacao";
import TotalValoresLicitacoes from "@/components/charts/TotalValoresLicitacao";


export default function Home() {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <MainLayout activeButton={"Home"}>
        <Municipio municipioId={"geral"} backActive={false} ano={"geral"}>
          <TotalLicitacoes municipio={"geral"} ano={"todos"} />
          <TotalValoresLicitacoes municipio={"geral"} ano={"todos"} />
        </Municipio>
      </MainLayout>
    </main>
  );
}
