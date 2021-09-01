import './App.css';
import PersonCard from './components/personCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Tim" lastname="Wang" age={45} hairColor="black"/>
      <PersonCard firstName="Justin" lastname="Shin" age={25} hairColor="black"/>
      <PersonCard firstName="Olja" lastname="Siforija" age={27} hairColor="Brown"/>
      <PersonCard firstName="Jordan" lastname="Gilberg" age={28} hairColor="Blonde"/>
    </div>
  );
}

export default App;
