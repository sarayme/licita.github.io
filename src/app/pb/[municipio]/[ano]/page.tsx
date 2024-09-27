import React from 'react';
import Footer from "@/components/Footer";
import TotalAtos from "@/components/charts/TotalAtos";
import { MainLayout } from "@/layouts/MainLayout";
import Municipio from "@/components/Municipio";
import { If, Then, Else } from "react-if";
import { ano } from './consts';
import TotalValoresLicitacoes from "@/components/charts/TotalValoresLicitacao";
import TotalLicitacoes from "@/components/charts/TotalLicitacao";

interface Params {
  municipio: string;
  ano: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return ano;
}

const AnoPage: React.FC<{ params: Params }> = ({ params }) => {
  const { municipio, ano } = params;
  return (
    <main>
      <MainLayout activeButton={"Home"}>
        <Municipio municipioId={municipio} backActive={true} ano={ano}>
          <TotalLicitacoes municipio={municipio} ano={ano} />
          <TotalValoresLicitacoes municipio={municipio} ano={ano} />
        </Municipio>
      </MainLayout>
    </main>
  );
};

export default AnoPage;