import "./stule.css";
import lixo from "./assets/Lixo.svg.svg";
import check from "./assets/download.jpg";
import Edit from "./assets/edit_modify_icon-icons.com_72390.png";
import { useState, useEffect, useRef } from "react";

function App() {
  const [lista, setLista] = useState([]);

  const [input, setInput] = useState("");
  const [concluido, setConcluido] = useState<string[]>([]);
  const [edit, setEdit] = useState({
    edition: false,
    ativ: "",
  });

  const TesteRef = useRef<HTMLInputElement>(null);
  function AddAtividade() {
    if (!input) {
      alert("digite uma atividade");
      return;
    }
    if (edit.edition == true) {
      SalveEdit();
      return;
    }

    const NewLista = [...lista, input];
    setLista(NewLista);
    setInput("");
    localStorage.setItem("@atividades", JSON.stringify([...lista, input]));
  }
  function SalveEdit() {
    const findIndex = lista.findIndex((item) => item === edit.ativ);
    const InputAtt = [...lista];
    InputAtt[findIndex] = input;
    setLista(InputAtt);
    setEdit({
      edition: false,
      ativ: "",
    });
    localStorage.setItem("@atividades", JSON.stringify(InputAtt));
    setInput("");
  }
  useEffect(() => {
    const TarefaSalva = localStorage.getItem("@atividades");
    if (TarefaSalva) {
      setLista(JSON.parse(TarefaSalva));
    }
  });

  function conclusao(task: string) {
    const listDelete = [...concluido, task];
    setConcluido(listDelete);
  }
  function deletar(task: string) {
    const ListDelete = lista.filter((item) => task !== item);
    setLista(ListDelete);
    localStorage.removeItem("@atividades");
    localStorage.setItem("@atividades", JSON.stringify(ListDelete));
  }
  function EditarAtiv(task: string) {
    setInput(task);
    //setLista([...lista, task]);
    setEdit({
      edition: true,
      ativ: task,
    });
    TesteRef.current?.focus();
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
          ref={TesteRef}
        ></input>
        <button className="addAtiv" onClick={AddAtividade}>
          {edit.edition ? "Atualizar atividade" : "Adicionar Atividade"}
        </button>
      </section>
      {lista.length <= Number([0]) ? (
        <h2> Ainda não temos atividades selecionadas </h2>
      ) : (
        lista.map((item) => (
          <section className="newAtiv" key={item}>
            <span className="item"> {item}</span>
            <button className="button" onClick={() => conclusao(item)}>
              {" "}
              <img src={check} alt="imagemDecheck" />
            </button>
            <button className="EditAtiv" onClick={() => EditarAtiv(item)}>
              <img src={Edit} alt="edition" />
            </button>
            <button className="button" onClick={() => deletar(item)}>
              <img src={lixo} />
            </button>
          </section>
        ))
      )}
      {concluido.length === 0 ? (
        <div></div>
      ) : (
        <>
          <h1> Lista de atividades concluídas</h1>
          {concluido.map((item) => (
            <section className="AtivConcluida" key={item}>
              <span className="itemConcluido"> {item} </span>
            </section>
          ))}
        </>
      )}
    </div>
  );
}
export default App;
