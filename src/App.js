import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Form';


function App() {

  const [users, setUsers] = useState([])

function createUser(user){
  setUsers([...users, user])
}

  return (
    <div className="App">
      <Banner />
      <Formulario createUser={user => createUser(user)}/> 
    </div>
  );
}

export default App;
