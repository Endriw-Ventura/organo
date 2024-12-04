import "./Formulario.css";
import InputField from "../InputField";
import DropDownList from "../DropDownList";
import Button from "../Button";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { IUser } from "../../shared/interfaces/IUser";
import { ITeam } from "../../shared/interfaces/ITeam";

interface FormProps {
  createUser: (user: IUser) => void,
  createTeam: (team: ITeam) => void,
  teams: ITeam[]
}

function Formulario({ createTeam, createUser, teams }: FormProps) {
  //hooks
  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [image, setImage] = useState("");
  const [teamColor, setTeamColor] = useState("#000000");
  const [teamName, setTeamName] = useState("");
  const [team, setTeam] = useState("Programação"); //default value

  function onSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createUser({
      id: uuid(),
      name,
      field,
      image,
      team,
    });

    setName("");
    setImage("");
    setTeam("Programação"); //default value
    setField("");
  }

  function onCreateTeam(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createTeam({
      id: uuid(), 
      name: teamName,
      color: teamColor,
    });

    setTeamName("");
    setTeamColor("#000000");
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>

        <InputField
          value={name}
          customEvent={(value) => setName(value)}
          label="Nome"
          placeholder="Digite o seu nome"
        />

        <InputField
          value={field}
          customEvent={(value) => setField(value)}
          label="Cargo"
          placeholder="Digite o seu cargo"
        />

        <InputField
          value={image}
          customEvent={(value) => setImage(value)}
          label="Imagem"
          placeholder="Informe a URL da imagem"
        />

        <DropDownList
          value={team}
          customEvent={(value) => setTeam(value)}
          label="Time"
          teams={teams}
        />

        <Button>Criar Card</Button>
      </form>

      <form onSubmit={onCreateTeam}>
        <h2>Preencha os dados para criar um time:</h2>

        <InputField
          value={teamName}
          customEvent={(value) => setTeamName(value)}
          label="Nome"
          placeholder="Digite o nome do time"
        />

        <InputField
          type="color"
          value={teamColor}
          customEvent={(value) => setTeamColor(value)}
          label="Cor"
          placeholder="Escolha a cor do time"
        />

        <Button>Criar Time</Button>
      </form>
    </section>
  );
}

export default Formulario;
