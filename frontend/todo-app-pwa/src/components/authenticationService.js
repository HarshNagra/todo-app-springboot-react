


class AuthenticationService {
    registerSuccessfulLogin(loginId, password){
        sessionStorage.setItem('authenticatedUser', loginId);
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
  
}

export default new AuthenticationService;
