import React from 'react';
import './App.css';
import NewForm from './components/NewForm';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact={true} path="/" component={NewForm} />
        </Switch>
      </Router>
  );
}

export default App;
