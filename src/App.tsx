import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Form";
import Group from "./components/Group";
import Footer from "./components/Footer";
import { v4 as uuid } from "uuid";
import { IUser } from "./shared/interfaces/IUser";
import { ITeam } from "./shared/interfaces/ITeam";

function App() {
  const [teams, setTeams] = useState<ITeam[]>([
    {
      id: uuid(),
      name: "Programação",
      color: "#57C278",
    },
    {
      id: uuid(),
      name: "UX & Design",
      color: "#DB6EBF",
    },
    {
      id: uuid(),
      name: "Data Science",
      color: "#A6D157",
    },
    {
      id: uuid(),
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      id: uuid(),
      name: "Back-End",
      color: "#6D1C0B",
    },
    {
      id: uuid(),
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      id: uuid(),
      name: "DevOps",
      color: "#E06B69",
    },
    {
      id: uuid(),
      name: "Inovação & Gestão",
      color: "#FF8A29",
    },
  ]);

  const [users, setUsers] = useState<IUser[]>([]);

  function createUser(user: IUser) {
    setUsers([...users, user]);
  }

  function createTeam(newTeam: ITeam) {
    setTeams([...teams, newTeam]);
  }

const handleChangeColor = (teamId: string) => (color: string) => {
  changeColor(color, teamId);
};

  const changeColor = (color: string, id: string) => {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color;
        }
        return team;
      })
    );
  };

  function deleteUser(id: string) {
    setUsers(users.filter((user: IUser) => user.id !== id));
  }

  return (
    <div className="App">
      <Banner src="images/banner.png" alt="banner.png" />
      <Formulario
        createTeam={createTeam}
        createUser={(user) => createUser(user)}
        teams={teams}
      />
      {teams.map((team) => (
        <Group
          key={team.id}
          name={team.name}
          color={team.color}
          users={users.filter((user: IUser) => user.team === team.name)}
          deleteUser={deleteUser}
          changeColor={handleChangeColor(team.id)}
        />
      ))}
      <Footer
        srcLogo="images/logo.png"
        altLogo="logo.png"
        srcFBIcon="images/fb.png"
        srcIGIcon="images/ig.png"
        srcTWIcon="images/tw.png"
        altFBIcon="fb.png"
        altIGIcon="ig.png"
        altTWIcon="tw.png"
        text="Desenvolvido por Endriw Ventura."
      />
    </div>
  );
}

export default App;
