import React from 'react';
import './App.css';


const App = () => (<PersonList/>)

const PersonList = () =>{
  const people = [
  {
    img:22,
    name:"john",
    job:'developer'
  },
  {
    img:34,
    name:"Bob",
    job:'Architect'
  },
  {
    img:56,
    name:"Peter", 
    job:'Tester'
  }

  ];

  return (<div>
  <Person person={people[0]}/>;
  <Person person={people[1]}>Hello Everyone,Welcome
  </Person>;
  <Person person={people[2]}/>
        </div>)
  }
  
  //const PersonList = () => (<Person/>)
  
const Person  = (props) => {
  const {img,name,job} = props.person;
  const {children} = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

return (<div className="person">
 <img src = {url} alt=""/>
<div>
   <h4>{name}</h4>
   <h4>{job}</h4>
   {children}
</div>
        </div>)
}




export default App;
