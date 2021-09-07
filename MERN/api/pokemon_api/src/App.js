import './App.css';
import React, {useState} from "react";

function App() {

  const [list, setList] = useState([])

  const runThis = () =>{
    let arr = [];
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(response =>{  
          return response.json();
      }).then(response => {
        response.results.map((item)=> arr.push(item.name))
        setList(arr);
      }).catch(err => {
          console.log(err);
      })
  }
  return (
    <div className="App">
      <button onClick={runThis}>Get The Pokemon!!!</button>
      <ul>
      {
        list.map((item)=>{
          return <li>{item}</li>
        })

      }
      </ul>
    </div>
  );
}

export default App;
