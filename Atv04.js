import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";
import Gallery1 from "./Gallery1";
import Counter from "./Counter";
import Form from "./Form";
import MovingDot from "./MovingDot";
import Form2 from "./Form2";
import Form3 from "./Form3";
import List1 from "./List1";
import List2 from "./List2";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";
import List3 from "./List3";
import List4 from "./List4";
import BucketList from "./BucketList";



const Atv04 = () => {
    return (
        <>
        <h1>Atividade 4</h1>
        <Toolbar />
        <Gallery1 />
        <Counter />
        <Form />
        <MovingDot />
        <Form2 />
        <Form3 />
        <List1 />
        <List2 />
        <ShapeEditor />
        <CounterList />
        <List3 />
        <List4 />
        <BucketList />
        <Link to="/">Voltar</Link>
        </>
    )
}

export default Atv04;