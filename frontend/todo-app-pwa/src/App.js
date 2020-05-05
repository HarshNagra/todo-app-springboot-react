import React from 'react';
import './App.css';
import Login from "./components/login";
import Welcome from "./components/welcome";
import Error from "./components/error";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/welcome/:name" component={Welcome}/>
          <Route  component={Error}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
