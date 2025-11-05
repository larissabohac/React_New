import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";

export default function Atv02(){
    return(
        <>
        <h1> Atividades da Semana 2</h1>
        <Letreiro />
        <Link to="/">Voltar</Link>
        </>
    );
}
