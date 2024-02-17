import "./Formulario.css";
import TextField from "../TextField";
import DropDownList from "../DropDownList";
import Button from "../Button";
import { useState } from "react";

function Formulario(props) {
  //hooks
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("Programação"); //default value

  function onSave(event) {
    event.preventDefault();
    props.createUser({
      nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setImagem("");
    setTime("");
    setCargo("");
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>

        <TextField
          valor={nome}
          customEvent={(valor) => setNome(valor)}
          label="Nome"
          placeholder="Digite o seu nome"
        />

        <TextField
          valor={cargo}
          customEvent={(valor) => setCargo(valor)}
          label="Cargo"
          placeholder="Digite o seu cargo"
        />

        <TextField
          valor={imagem}
          customEvent={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Informe a URL da imagem"
        />

        <DropDownList
          valor={time}
          customEvent={(valor) => setTime(valor)}
          label="Time"
          itens={props.itens}
        />

        <Button>Criar Card</Button>
      </form>
    </section>
  );
}

export default Formulario;
