import './App.css';
import Shell from "./components/shell"
import Box from './components/box';
import React, { useState } from 'react';

function App() {
  const [boxesHere, setBoxes] = useState([])

  const theyWantAnotherBox = (newbox) => {
    setBoxes([...boxesHere, newbox]);
  }

  return (
    <div className="App">
      <Shell onNewBox={theyWantAnotherBox}/>
      <div>
      {
        boxesHere.map( ((singleBox) =>{
          return <Box box={singleBox}/>
        }))
      }
      </div>
    </div>
  );
}

export default App;
