import ContadorPessoas from "./ContadorPessoas";
import { Link } from "react-router-dom";

export default function Atv03(){
    return(
        <>
        <h1> Atividades da Semana 3</h1>
        <ContadorPessoas />
        <Link to="/">Voltar</Link>
        </>
    );
}
