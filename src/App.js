import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Form";
import Group from "./components/Group";
import Footer from "./components/Footer";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "UX & Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Back-End",
      corPrimaria: "#6D1C0B",
      corSecundaria: "#90564A",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "DevOps",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Inovação & Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [users, setUsers] = useState([]);

  function createUser(user) {
    setUsers([...users, user]);
  }

  function deleteUser(user) {
    console.log(user);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        createUser={(user) => createUser(user)}
        itens={times.map((time) => time.nome)}
      />
      {times.map((time) => (
        <Group
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          itens={users.filter((user) => user.time === time.nome)}
          deleteUser={(user) => deleteUser(user)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
