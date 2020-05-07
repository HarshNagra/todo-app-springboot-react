import React from 'react';
import './App.css';
import Navigation from "./components/navigation";
import Login from "./components/login";
import Logout from "./components/logout";
import Welcome from "./components/welcome";
import Error from "./components/error";
import Todo from "./components/todoList";
import AuthenticatedRoute from "./components/authenticatedRoute";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/login" component={Login}/>
          <AuthenticatedRoute path="/welcome/:name" component={Welcome}/>
          <AuthenticatedRoute path="/todo" component={Todo}/>
          <AuthenticatedRoute path="/logout" component={Logout}/>
          <Route  component={Error}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
