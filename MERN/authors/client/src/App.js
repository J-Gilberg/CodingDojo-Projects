import './App.css';
import React from 'react';
import Main from './views/Main';
import AuthorEdit from './views/AuthorEdit';
import AuthorNew from './views/AuthorNew'
import {
  BrowserRouter,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/authors/new">
          <AuthorNew />
        </Route>
        <Route exact path="/authors/:_id">
          <AuthorEdit />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
