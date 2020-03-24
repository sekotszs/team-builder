import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './member';


function App() {
  const [teamMembers,setTeamMembers] = useState([
    {firstName: 'Zoe', lastName:'Stokes', role: 'Furry'},
    {firstName: 'Marissa', lastName:'Cooter', role: 'NonFurry'},
    {firstName: 'Christina', lastName:'Harris', role: 'CatLady'},
    {firstName: 'Kenzie', lastName:'Morlock', role: 'CutiePie'}
  ]);
  return (
    <div>
      {teamMembers.map(member => (
        <Member teamMember={member}></Member>
      ))}
    </div>
  );
}

export default App;
