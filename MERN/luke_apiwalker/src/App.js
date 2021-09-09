import './App.css';
import React from 'react';
import Item from './components/item';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/:item/:id">
            <Item/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
