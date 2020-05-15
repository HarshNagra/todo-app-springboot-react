import React, { useState } from 'react';
import './App.css';
import Navigation from "./components/navigation";
import Login from "./components/login";
import Logout from "./components/logout";
import Welcome from "./components/welcome";
import Error from "./components/error";
import TodoList from "./components/todoList";
import Todo from "./components/todo";
import AuthenticatedRoute from "./components/authenticatedRoute";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
      backgroundColor: 'lightblue'
  }
  
}));


function App() {
  const classes = useStyles();
  const [reload, setReload] = useState(true);
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/login" component={Login}/>
          <AuthenticatedRoute path="/welcome/:name" component={Welcome}/>
          <AuthenticatedRoute path="/todo/:id" component={Todo}/>
          <AuthenticatedRoute path="/todo" component={TodoList}/>
          <Route path="/logout" component={Logout}/>
          <Route  component={Error}/>
          
        </Switch>
        <Button onClick={() => setReload(!reload)} className={classes.button} variant="contained">Refresh</Button>
      </Router>
      
    </div>
  );
}

export default App;
