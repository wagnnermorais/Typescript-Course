import { createContext } from "react";
import Destructuring from "../components/Destructuring";
import EnumComponent, { Category } from "../components/EnumComponent";
import FirstComponent from "../components/FirstComponent";
import SecondComponent from "../components/SecondComponent";
import State from "../components/State";
import ContextComponent from "../context/ContextComponent";

// Type
type textOrNull = string | null;

// Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

const Home = () => {
  // Variáveis
  const name: string = "Wagner";
  const age: number = 24;
  const isWorking: boolean = true;

  // Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // Type
  const myText: textOrNull = "Teste de type";
  const mySecondText: textOrNull = null;

  // context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <h1>Home</h1>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        {isWorking && <p>Está trabalhando</p>}
        <h2>{userGreeting(name)}</h2>
        <FirstComponent />
        <SecondComponent name="Segundo Componente" />
        <Destructuring
          title="Primeiro post"
          content="Algum conteúdo"
          commentsQty={10}
          tags={["ts", "js", "react", "vite"]}
        />
        <Destructuring
          title="Segundo post"
          content="Algum conteúdo novo"
          commentsQty={15}
          tags={["python"]}
        />
        <EnumComponent
          title="Enum post"
          content="Algum conteúdo"
          commentsQty={30}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <State />
        {myText && <p>Tem texto na variável!</p>}
        {mySecondText && <p>Tem texto na variável!</p>}
        <ContextComponent />
      </div>
    </AppContext.Provider>
  );
};

export default Home;
