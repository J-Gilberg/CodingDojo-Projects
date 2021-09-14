import './App.css';
import React from 'react';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/products/:_id">
          <ProductDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;