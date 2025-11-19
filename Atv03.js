import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import Profile from "./Profile";
import TodoList from "./TodoList";
import PackingList from "./PackingList";
import List from "./List";
import FullRecipe from "./FullRecipe";
import TeaSet from "./TeaGathering";



const Atv03 = () => {
    return (
        <>
        <h1>Atividade 3</h1>
        <Gallery />
        <TodoList />
        <Profile />
        <PackingList />
        <List />
        <FullRecipe />
        <TeaSet />
        <Link to="/">Voltar</Link>
        </>
    )
}

export default Atv03;