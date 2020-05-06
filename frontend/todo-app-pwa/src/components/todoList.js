import React from 'react';
import Navigation from "./navigation";


function Welcome(props) {
    
  return (
    <div className="App">
      <Navigation/>
      <div>{props.match.params.name}</div>
    </div>
  );
}

export default Welcome;
