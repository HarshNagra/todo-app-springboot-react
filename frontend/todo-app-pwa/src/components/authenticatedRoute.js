import React from 'react';
import AuthenticationService from './authenticationService';
import { Route, Redirect } from 'react-router-dom';


function AuthenticatedRoute(props){
        if(AuthenticationService.isUserLogedIn()){
            return <Route {...props}></Route>
        }
        else {
            return <Redirect to="/login"/>
        }
}

export default AuthenticatedRoute;