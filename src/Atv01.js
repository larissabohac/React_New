import Relogio from "./Relogio";
import { Link } from "react-router-dom";

export default function Atv01(){
    return(
        <>
        <h1> Atividades da Semana 1</h1>
        <Relogio />
        
        <Link to="/">Voltar</Link>
        </>
    );
}
