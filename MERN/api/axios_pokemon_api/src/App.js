import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [list, setList] = useState([])
    const getData = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
          .then(response=>{setList(response.data.results)})
      console.log(list);
    }
  return (
      <div className="App">
        <div>
          <button onClick={getData}>Get the Pokemon!!!</button>
        {
          list.map((item)=>{
            return <li>{item.name}</li>
          })
        }
        </div>
    
      </div>
    );
}
export default App;