import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { LOGIN_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client'; 
import { Link } from 'react-router-dom'; 
import Auth from '../../utils/auth';

export default function Login() {

    // set initial state of login form
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");

    // initial state of error message
    const [errorMessage, setError] = useState("");

    // constant to assign to the login_user mutation
    const [login, { error }] = useMutation(LOGIN_USER);

    // targets the value of the input box and sets it to username and password useState
    const handleUser = (e) => {
        setUser(e.target.value)
    }

    const handlePass =  (e) => {
        setPass(e.target.value)
    }

    console.log(username, password);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // set data as an object
            const { data } = await login({
                variables: { username: username, password: password }
            });

            // if data object doesn't exist, send an error message
            if (!data) {
                setError('lol error');
                console.log(error);
            };

            // set token to successful login data
            Auth.login(data.login.token);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <br></br>
            <center><h2>Login</h2></center>
            <br></br>
            <center>
                <form className="form title" onSubmit={handleFormSubmit}>
                    <input className="input" value={username} id="username" type="username" placeholder="Username" onChange={handleUser}></input>
                    <p>
                        {errorMessage && (
                            <span classname="error-text">{errorMessage}</span>
                        )}
                    </p>
                    <br />
                    <input value={password} className="input" id="password" placeholder="password" onChange={handlePass}></input>
                    <p>
                        {errorMessage && (
                            <span className="error-text">{errorMessage}</span>
                         )}
                    </p>
                    <br />
                    <input type="submit" className="Submit btn btn-danger" value="login" onClick={handleFormSubmit}></input>
                </form>
            </center>
            <br />
            <center><p className="register-link">Don't have an account? <Link to="/register"><span className="a2">Register</span></Link></p></center>            
        </div>
    )
}