import React, {useState} from 'react';
import HelloWorldService from '../api/todo/HelloWorldService';



function Welcome(props) {
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const retrieveWelcomeMessage = () => {
    HelloWorldService.executeHelloWorldService()
    .then(response => handleSuccessfulResponse(response))
    //.catch()
  }

  const handleSuccessfulResponse = (response) => {
    setWelcomeMessage(response.data);
  };

  return (
    <div className="App">
      <div>{props.match.params.name}</div>
      <div>
        Click here to check backend
        <button onClick={retrieveWelcomeMessage}>Button</button>
      </div>
      <div>
        {welcomeMessage}
      </div>
    </div>
  );
}

export default Welcome;

