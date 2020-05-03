import React, {Component} from 'react';


function TodoApp(){
  return (
    <div className="TodoApp">
        My Todo Application
        <LoginComponent/>
    </div>
  );
}

export default TodoApp;

function LoginComponent(){
    return(
        <div>
            User Name: <input type="text" name="username"/>
            Password: <input type="text" name="password"/>
            <button>Login</button>
        </div>
    );
}
