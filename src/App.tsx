import "./stule.css";
import { useState } from "react";

function App() {
  const [lista, setLista] = useState([
    "Corrida matinal",
    "Café da manhã",
    "Estudar",
  ]);

  const [input, setInput] = useState("");
  const [concluido, setConcluido] = useState([]);

  function AddAtividade() {
    if (!input) {
      alert("digite uma atividade");
      return;
    }
    const NewLista = [...lista, input];
    setLista(NewLista);
    setInput("");
  }
  function deletar(task: string) {
    const ListDelete = lista.filter((item) => task !== item);
    setLista(ListDelete);
  }
  function conclusao(task: string) {
    const listDelete = [...concluido, task];
    setConcluido(listDelete);
  }

  return (
    <div className="Principal">
      <h1> Lista de atividades a fazer</h1>
      <br />
      <section className="inputAtiv">
        <input
          className="input"
          placeholder="digite a próxima tarefa..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></input>
        <button className="addAtiv" onClick={AddAtividade}>
          {" "}
          Adicionar atividade
        </button>
      </section>
      {lista.map((item) => (
        <section className="newAtiv" key={item}>
          <span className="item"> {item}</span>
          <button className="button" onClick={() => deletar(item)}>
            {" "}
            Excluir Atividade
          </button>
          <button className="button" onClick={() => conclusao(item)}>
            {" "}
            Atividade realizada{" "}
          </button>
        </section>
      ))}
      <h1> Lista de atividades concluídas</h1>
      {concluido.map((item) => (
        <section className="AtivConcluida">
          <span> {item} </span>
        </section>
      ))}
    </div>
  );
}
export default App;
