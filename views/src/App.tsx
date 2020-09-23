import React from 'react';
import './App.css';
import NewForm from './components/NewForm';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ShowQuotes from './components/ShowQuotes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={NewForm} />
        <Route exact={true} path="/list" component={ShowQuotes} />
      </Switch>
    </Router>
  );
}

export default App;
