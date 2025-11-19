import Relogio from "./Relogio";
import Letreiro from './Letreiro';
import { Link } from "react-router-dom";

const Atv01 = () => {
    return (
        <>
        <h1>Atividade 1</h1>
        <Relogio />
        <Letreiro />
        <Link to="/">Voltar</Link>
        </>
    )
}

export default Atv01;