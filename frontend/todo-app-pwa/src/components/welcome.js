import React from 'react';
import Navigation from "./navigation";

import {BrowserRouter as Router, Route} from 'react-router-dom';


function Welcome(props) {
  return (
    <div className="App">
      <Navigation/>
      <div>{props.match.params.name}</div>
    </div>
  );
}

export default Welcome;
