import React, {useState} from 'react';
import HelloWorldService from '../api/todo/HelloWorldService';



function Welcome(props) {
  // const [welcomeMessage, setWelcomeMessage] = useState('');

  // const retrieveWelcomeMessage = () => {
  //   HelloWorldService.executeHelloWorldPathService(props.match.params.name)
  //   .then(response => handleSuccessfulResponse(response))
  //   .catch(error => handleError(error))
  // }

  // const handleSuccessfulResponse = (response) => {
  //   console.log(response);
  //   setWelcomeMessage(response.data.message);
  // };

  // const handleError = (error) => {
  //   console.log(error.response);
  //   let errorMessage = '';
  //   if(error.message) errorMessage += error.message
  //   if(error.response && error.response.data){
  //     errorMessage += error.response.data.message
  //   }
  //   setWelcomeMessage(errorMessage)
  // };

  return (
    <div className="App">
      <h3 style={{padding:'15px'}}><b>Welcome {props.match.params.name}!</b></h3><br/>
      <p></p>
      <div style={{textAlign:'center'}}>
        <p>This application is a WIP.</p> <br/> <p>Click once on the icon in navigation bar to get started!</p>
        <p><b>Stack:</b>  Spring Boot - React JS - Hibernate DB</p> <br/>
      </div>
      <div style={{fixed: 'bottom', paddingBottom:'10px' }}>
        <h6 >Copyright HARSH NAGRA 2020</h6>
      </div>
      
    </div>
  );
}

export default Welcome;

