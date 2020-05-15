import axios from 'axios';
import { API_URL } from '../constants'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'


class AuthenticationService {

    executeBasicAuthenticationService(username, password){
        return axios.get(`${API_URL}/basicauth`, 
        {
            headers: {authorization: this.createBasicAuthToken(username, password)}
        })
    }

    executeJWTAuthenticationService(username, password){
        return axios.post(`${API_URL}/authenticate`, 
        {
            username,
            password
        })
    }

    createBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
    }

    createJWTToken(token){
        return 'Bearer ' + token
    }

    registerSuccessfulLoginforJwt(username, token){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createJWTToken(token));
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLogedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

        if(user == null) return false;
        else return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user == null) return '';
        else return user

    }

    setupAxiosInterceptors(basicAuthHeader) {
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLogedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
            
        )
    }
    

  
}

export default new AuthenticationService;
