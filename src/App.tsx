import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body className="container">
          <header className="banner-background">
            <img
              src="src\assets\Logo.svg"
              alt="logo do todo"
              className="logo"
            />
          </header>
          <div className="input-field">
            <div className="input-shape">
              <input type="text" placeholder="Adicione uma nova tarefa" />
            </div>
            <button>Criar</button>
          </div>
          <div className="stats-container">
            <div className="stats">
              <div className="created">
                <p>
                  Tarefas criadas<span className="counter">{0}</span>
                </p>
              </div>
              <div className="completed">
                <p>
                  Concluídas<span className="counter">{0}</span>
                </p>
              </div>
            </div>
          </div>
      </body>
    </>
  );
}

export default App;
