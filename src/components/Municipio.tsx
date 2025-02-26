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
                    <option value="areial">Areial</option>
                    <option value="agua-branca">Água Branca</option>
                    <option value="aguiar">Aguiar</option>
                    <option value="alagoa-grande">Alagoa Grande</option>
                    <option value="alagoa-nova">Alagoa Nova</option>
                    <option value="alhandra">Alhandra</option>
                    <option value="aparecida">Aparecida</option>
                    <option value="arara">Arara</option>
                    <option value="areia-de-baraunas">Areia de Baraúnas</option>
                    <option value="bananeiras">Bananeiras</option>
                    <option value="barra-de-santa-rosa">Barra de Santa Rosa</option>
                    <option value="bayeux">Bayeux</option>
                    <option value="bernardino-batista">Bernardino Batista</option>
                    <option value="boa-vista">Boa Vista</option>
                    <option value="bom-jesus">Bom Jesus</option>
                    <option value="bom-sucesso">Bom Sucesso</option>
                    <option value="bonito-de-santa-fe">Bonito de Santa Fé</option>
                    <option value="brejo-dos-santos">Brejo dos Santos</option>
                    <option value="caapora">Caaporã</option>
                    <option value="cabaceiras">Cabaceiras</option>
                    <option value="cacimba-de-areia">Cacimba de Areia</option>
                    <option value="cacimba-de-dentro">Cacimba de Dentro</option>
                    <option value="cacimbas">Cacimbas</option>
                    <option value="caicara">Caiçara</option>
                    <option value="cajazeirinhas">Cajazeirinhas</option>
                    <option value="camalau">Camalaú</option>
                    <option value="catingueira">Catingueira</option>
                    <option value="conceicao">Conceição</option>
                    <option value="condado">Condado</option>
                    <option value="congo">Congo</option>
                    <option value="coremas">Coremas</option>
                    <option value="cubati">Cubati</option>
                    <option value="curral-velho">Curral Velho</option>
                    <option value="diamante">Diamante</option>
                    <option value="emas">Emas</option>
                    <option value="esperanca">Esperança</option>
                    <option value="igaracy">Igaracy</option>
                    <option value="itaporanga">Itaporanga</option>
                    <option value="jacarau">Jacaraú</option>
                    <option value="jerico">Jericó</option>
                    <option value="joca-claudino">Joca Claudino</option>
                    <option value="juarez-tavora">Juarez Távora</option>
                    <option value="juazeirinho">Juazeirinho</option>
                    <option value="junco-do-serido">Junco do Seridó</option>
                    <option value="juripiranga">Juripiranga</option>
                    <option value="lagoa-de-dentro">Lagoa de Dentro</option>
                    <option value="lagoa">Lagoa</option>
                    <option value="lastro">Lastro</option>
                    <option value="livramento">Livramento</option>
                    <option value="logradouro">Logradouro</option>
                    <option value="malta">Malta</option>
                    <option value="manaira">Manaíra</option>
                    <option value="marizopolis">Marizópolis</option>
                    <option value="massaranduba">Massaranduba</option>
                    <option value="mataraca">Mataraca</option>
                    <option value="matinhas">Matinhas</option>
                    <option value="mato-grosso">Mato Grosso</option>
                    <option value="mogeiro">Mogeiro</option>
                    <option value="mogeiropregao">Mogeiro Pregão</option>
                    <option value="montadas-comissao">Montadas Comissão</option>
                    <option value="montadas">Montadas</option>
                    <option value="monte-horebe">Monte Horebe</option>
                    <option value="monteiro">Monteiro</option>
                    <option value="natuba">Natuba</option>
                    <option value="nazarezinho">Nazarezinho</option>
                    <option value="olho-d'agua">Olho d'Água</option>
                    <option value="olivedos">Olivedos</option>
                    <option value="ouro-velho">Ouro Velho</option>
                    <option value="patos">Patos</option>
                    <option value="paulista">Paulista</option>
                    <option value="pedra-lavrada">Pedra Lavrada</option>
                    <option value="pianco">Piancó</option>
                    <option value="picui">Picuí</option>
                    <option value="pocinhos">Pocinhos</option>
                    <option value="poco-dantas">Poço Dantas</option>
                    <option value="poco-de-jose-de-moura">Poço de José de Moura</option>
                    <option value="pombal">Pombal</option>
                    <option value="princesa-isabel">Princesa Isabel</option>
                    <option value="quixaba">Quixaba</option>
                    <option value="riacho-dos-cavalos">Riacho dos Cavalos</option>
                    <option value="rio-tinto">Rio Tinto</option>
                    <option value="salgadinho">Salgadinho</option>
                    <option value="salgado-de-sao-felix">Salgado de São Félix</option>
                    <option value="santa-cecilia">Santa Cecília</option>
                    <option value="santa-cruz">Santa Cruz</option>
                    <option value="santa-helena">Santa Helena</option>
                    <option value="santa-teresinha">Santa Teresinha</option>
                    <option value="santana-dos-garrotes">Santana dos Garrotes</option>
                    <option value="sao-bentinho">São Bentinho</option>
                    <option value="sao-domingos">São Domingos</option>
                    <option value="sao-francisco">São Francisco</option>
                    <option value="sao-joao-do-rio-do-peixe">São João do Rio do Peixe</option>
                    <option value="sao-joao-do-tigre">São João do Tigre</option>
                    <option value="sao-jose-da-lagoa-tapada">São José da Lagoa Tapada</option>
                    <option value="sao-jose-da-lagoa">São José da Lagoa</option>
                    <option value="sao-jose-de-piranhas">São José de Piranhas</option>
                    <option value="sao-jose-do-bonfim">São José do Bonfim</option>
                    <option value="sao-jose-do-brejo-do-cruz">São José do Brejo do Cruz</option>
                    <option value="sao-jose-do-sabugi">São José do Sabugi</option>
                    <option value="sao-jose-dos-cordeiros">São José dos Cordeiros</option>
                    <option value="sao-mamede">São Mamede</option>
                    <option value="sao-miguel-de-taipu">São Miguel de Taipu</option>
                    <option value="sao-sebastiao-de-lagoa">São Sebastião de Lagoa</option>
                    <option value="sao-sebastiao-do-umbuzeiro">São Sebastião do Umbuzeiro</option>
                    <option value="sape">Sapé</option>
                    <option value="serra-grande">Serra Grande</option>
                    <option value="serra-redonda">Serra Redonda</option>
                    <option value="soledade">Soledade</option>
                    <option value="taperoa">Taperoá</option>
                    <option value="tavares">Tavares</option>
                    <option value="vieiropolis">Vieirópolis</option>
                    <option value="vista-serrana">Vista Serrana</option>                    
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