import { useState } from "react";
import "./App.css";
import { EmptyView } from "./components/EmptyView";
import { Stats } from "./components/Stats";
import { Input } from "./components/Input";
import { Header } from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body className="container">
        <Header />
        <Input />
        <Stats />
        <EmptyView/>
        <div className="task input-shape">
          <input type="checkbox" className="checkbox"/>
          <textarea placeholder="Digite aqui..." className="task-input input-shape"></textarea>
          <img src="src\assets\trash.svg" alt="" />
        </div>
      </body>
    </>
  );
}

export default App;
