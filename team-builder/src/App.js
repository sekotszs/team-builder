import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './member';
import Form from './Form';


function App() {
  const [teamMembers,setTeamMembers] = useState([
    {name: 'Zoe', email:'furry@gmail.com', role: 'Furry'},
    {fname: 'Marissa', email:'NonFurry@gmail.com', role: 'NonFurry'},
    {name: 'Christina', email:'CatLady@gmail.com', role: 'CatLady'},
    {name: 'Kenzie', email:'CutiePie@gmail.com', role: 'CutiePie'}
  ]);

  const addMember = (event, name, email, role) =>{
    event.preventDefault()
    setTeamMembers(existing =>[...existing,{name:name, email:email, role:role}])
  }
  return (
    <>
    <div>
      {teamMembers.map(member => (
        <Member teamMember={member}></Member>
      ))}
    </div>
    <Form addMember = {addMember}/>
    </>
  );
}

export default App;
