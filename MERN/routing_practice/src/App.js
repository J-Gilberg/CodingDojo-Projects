import React from "react";
import Home from "./views/home";
import Number from "./views/number";
import Hello from "./views/hello";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
    
// const Home = (props) => {
//   return (
//     <h1 style={{color: "red"}}>Home Component</h1>
//   );
// }
    
// const About = (props) => {
//   return (
//     <h1 style={{color: "blue"}}>About Component</h1>
//   );
// }
    
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/hello">
          <Hello />
        </Route>
        <Route exact path="/:num">
          <Number />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/hello/:textColor/:backColor">
          <Hello />
        </Route>
        <Route path="/hello/:textColor/">
          <Hello />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;