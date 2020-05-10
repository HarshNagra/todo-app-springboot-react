import React, {useState} from 'react';
import HelloWorldService from '../api/todo/HelloWorldService';



function Welcome(props) {
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const retrieveWelcomeMessage = () => {
    // HelloWorldService.executeHelloWorldService()
    // .then(response => handleSuccessfulResponse(response))

    // HelloWorldService.executeHelloWorldBeanService()
    // .then(response => handleSuccessfulResponse(response))

    HelloWorldService.executeHelloWorldPathService(props.match.params.name)
    .then(response => handleSuccessfulResponse(response))
    .catch(error => handleError(error))
  }

  const handleSuccessfulResponse = (response) => {
    console.log(response);
    setWelcomeMessage(response.data.message);
  };

  const handleError = (error) => {
    console.log(error.response.data.message);
    setWelcomeMessage(error.response.data.message);
    // setWelcomeMessage(response.data.message);
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

