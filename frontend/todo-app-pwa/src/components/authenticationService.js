import axios from 'axios';


class AuthenticationService {

    executeBasicAuthenticationService(username, password){
        return axios.get('http://localhost:8080/basicauth', 
        {
            headers: {authorization: this.createBasicAuthToken(username, password)}
        })
    }

    executeJWTAuthenticationService(username, password){
        return axios.post('http://localhost:8080/authenticate', 
        {
            username,
            password
        })
    }

    createBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password){
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
    }

    createJWTToken(token){
        return 'Bearer ' + token
    }

    registerSuccessfulLoginforJwt(username, token){
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createJWTToken(token));
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLogedIn() {
        let user = sessionStorage.getItem('authenticatedUser');

        if(user == null) return false;
        else return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser');
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
