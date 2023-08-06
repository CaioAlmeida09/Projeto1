import "./stule.css";
import { useState } from "react";

interface AlunoProps {
  nome: string;
  idade: string;
}

function App() {
  const [aluno, setAluno] = useState("");
  const [idade, setIdade] = useState("");
  const [infoaluno, setInfoaluno] = useState<AlunoProps>();
  const [contador, setContador] = useState(0);

  function TrocarAluno() {
    setInfoaluno({
      nome: aluno,
      idade: idade,
    });
  }
  function Soma() {
    setContador(contador + 1);
  }
  function Dimi() {
    if (contador === 0) {
      return;
    }
    setContador(contador - 1);
  }
  return (
    <div>
      <input
        onChange={(e) => setAluno(e.target.value)}
        placeholder="Digite seu nome"
        value={aluno}
      ></input>
      <br />
      <input
        placeholder="Digite sua idade"
        onChange={(e) => setIdade(e.target.value)}
        value={idade}
      ></input>{" "}
      <br />
      <button onClick={TrocarAluno}>ação</button>
      <br />
      <h2>Alunos:</h2>
      <p>Nome: {infoaluno?.nome}</p>
      <p>Idade: {infoaluno?.idade}</p>
      <br />
      <h1> Contador use state</h1>
      <button onClick={Soma}> + </button>
      {contador}
      <button onClick={Dimi}> - </button>
    </div>
  );
}

export default App;
