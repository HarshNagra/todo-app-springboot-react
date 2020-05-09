import React from 'react';
import Navigation from "./navigation";

import {BrowserRouter as Router, Route} from 'react-router-dom';


function Error() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      <h3>Invalid URL!</h3>
    </div>
  );
}

export default Error;
