import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import itemsList from "./data/itemsList";

function App() {
    return (
        <div>
            <Logo />
            <Form />
            <PackingList itemsList={itemsList} />
            <Stats />
        </div>
    );
}

export default App;
