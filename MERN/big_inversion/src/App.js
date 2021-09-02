import PersonCard from './components/personCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName ="Jordan" lastName="Gilberg" age={25} hairColor="blonde"/>
      <PersonCard firstName="Justin" lastname="Shin" age={25} hairColor="black"/>
      <PersonCard firstName="Olja" lastname="Siforija" age={27} hairColor="Brown"/>
    </div>
  );
}

export default App;
