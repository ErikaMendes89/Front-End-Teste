import { Header } from "../components/Header";
import {Banner} from "../components/Banner";
import {ApartmentsCarousel} from "../components/apartamentoCarrosel";
import { Manifesto } from "../components/Manifesto";
import {Advantages} from "../components/vantages";
import {ProdutoDetalhado} from "../components/depoimento";
import{Parceiros} from "../components/parceiros";
import {Footer} from "../components/Footer";


export default function Home(){
    return(
        <>
        <Header/>
        <Banner/>
        <ApartmentsCarousel />
        <Manifesto />
        <Advantages />
        <ProdutoDetalhado />
        <Parceiros />
        <Footer/>
        </>
    )
}