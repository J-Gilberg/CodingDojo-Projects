import './App.css';
import Tabs from './components/tabs';
import MessageBox from './components/messageBox';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [selectedMessage, setSelectedMessage] = useState("")
  
  const changeMessage = (m) => {
    console.log("message passed to app")
    console.log(m);
    setSelectedMessage(m);
  }

  return (
    <div className="App">
      <div>
        <Tabs getMessage = {changeMessage}/>
      </div>
      <div>
      <MessageBox showMessage = {selectedMessage}/>
      </div> 
    </div>
  );
}

export default App;
