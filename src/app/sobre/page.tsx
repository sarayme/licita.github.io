import {LicitaAbertaGrayLogo, LicitaAbertaLogo} from "@/assets/svgs/icons";
import Footer from "@/components/Footer";
import { MainLayout } from "@/layouts/MainLayout";
import Link from "next/link";

export default function Sobre() {
  return (
    <MainLayout activeButton={"About"}>
      <div className="flex flex-col gap-y-4 lg:text-base min-[1792px]:text-xl text-base">
        <header className="flex gap-x-5 font-semibold leading-10 items-center">
          <LicitaAbertaGrayLogo />
          <h1 className="lg:text-[2.4375rem] text-2xl w-[21.37rem]">
            Conheça um pouco mais sobre o projeto
          </h1>
        </header>
        <section className=" flex flex-col gap-y-6">
          <p className="font-normal ">
            Este projeto é financiado pelo{" "}
            <span className="underline decoration-solid">
              <Link href="https://www.ifpb.edu.br/institucional/sobre-o-ifpb">Instituto Federal da Paraíba (IFPB).</Link>
            </span>
             Além do financiamento, o
            projeto conta com apoio da{" "}
            <span className="underline decoration-solid">
              <Link href="https://ok.org.br/sobre/">Open Knowledge Brasil (OKBR)</Link> 
            </span>
            , no âmbito de uma parceria com foco no{" "}
            <span className="underline decoration-solid">
              <Link href="https://ok.org.br/projetos/querido-diario/">projeto Querido Diário.</Link> 
            </span>
          </p>
          <h3 className="font-bold">
            O projeto conta com os seguintes integrantes:
          </h3>
          <div>
            <p className="font-normal">
              <strong>Amanda Ferreira da Silva Alves:</strong> discente do curso
              Engenharia da Computação do IFPB Campus Campina Grande
            </p>
            <p>
              <strong>Sara Aymê Marinho Gaspar:</strong> discente do curso
              Engenharia da Computação do IFPB Campus Campina Grande
            </p>
            <p>
              <strong>Paulo Ribeiro Lins Júnior:</strong> professor do IFPB Campus
              Campina Grande
            </p>
          </div>
        </section>
        <div className="bg-white p-9 rounded-3xl">
          <p>
            O projeto tem como principal objetivo coletar, transformar em texto
            e separar em municípios os diários oficiais municipais da Paraíba
            disponibilizados pela plataforma do Querido Diário. Além da separação do conteúdo por
            município, o texto do diário de cada ente estadual é separado em
            atos normativos. Também iremos utilizar algoritmos computacionais
            para classificar e extrair informações dos atos normativos dos
            diários de cada município. Mais especificamente, o nosso foco será
            em licitações.
          </p>
        </div>
        <section className="flex flex-col gap-y-5">
          <p>
            <strong>Também buscamos alguns requisitos não-funcionais:</strong>
          </p>
          <p>
            <span className="text-[#7DC2DF] font-black">Simplicidade:</span> ela
            se traduziu em uma análise de diversos casos, onde chegamos a
            conclusão que poderíamos utilizar expressões regulares (ao invés de
            inteligência computacional, por exemplo);
          </p>
          <p>
            <span className="text-[#7DC2DF] font-black">
              Facilidade de utilização do código pelo QD:
            </span>{" "}
            com a ajuda da busca pela simplicidade, o objetivo é depender o
            minímo possível de bibliotecas de terceiros e focar numa API de
            clara e com boa documentação;
          </p>
          <p>
            <span className="text-[#7DC2DF] font-black">
              Replicabilidade do código para outros estados/associações de
              municípios:
            </span>
            prevemos que a solução possa ser utilizada em outros contextos
            apenas modificando as expressões regulares;
          </p>
          <p>
            Além destes, todo o código produzido é aberto e distribuído de forma
            livre no repositório
            <Link
              href="https://github.com/exoonero/extrator"
              className="underline decoration-solid mx-1"
            >
              exoonero/extrator
            </Link>
          </p>
        </section>
        <div className="flex flex-col md:flex-row text-xs text-[#6C6C6C] gap-x-10 items-center justify-center">
          <LicitaAbertaGrayLogo className="w-16 scale-125 md:ml-5 md:w-24 3xl:w-20" />
          <p>
            O nome do projeto LicitaAberta reflete o seu principal objetivo:
            trazer mais transparência e acessibilidade às informações de licitações públicas no Brasil.
            A palavra Licita faz referência ao processo licitatório, enquanto Aberta reforça a ideia
            de disponibilizar dados de forma clara e acessível para toda a sociedade.
            O projeto busca empoderar cidadãos, jornalistas e órgãos de controle,
            permitindo que todos acompanhem e fiscalizem de perto os gastos públicos, promovendo uma gestão pública mais eficiente e responsável.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
