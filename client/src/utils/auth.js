import decode from 'jwt-decode';

class Auth {
    // decodes the user data from stored token
    getUser() {
        return decode(this.getToken());
    };

    // return true of false if the token exists
    loggedIn() {
        const token = this.getToken();
        return token ? true : false;
    };

    login(idToken) {
        // gets token from localstorage then reloads page to apply "logged in" status
        localStorage.setItem("id_token", idToken);
        window.location.assign("/");
    };

    getToken() {
        // gets token from local storage
        return localStorage.getItem("id_token");
    };

    logout() {
        // removes token from local storage then reloads the page
        localStorage.removeItem("id_token");
        window.location.assign("/");
    }
}

export default new Auth();