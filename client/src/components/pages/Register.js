import React from 'react';

export default function Register() {
    return (
        <div>
            <br></br>
            <center><h2>Register</h2></center>
            <br></br>
            <center><input type="text" placeholder="Email"></input></center>
            <br></br>
            <center><input type="text" placeholder="Username"></input></center>
            <br></br>
            <center><input type="text" placeholder="Password"></input></center>
            <br></br>
            <center><input className="btn btn-primary" type="submit" value="Submit"></input></center>
            <br></br>
            <center><a className="login-link" href="youtube.com">Already have an account? Click here to login</a></center>            
        </div>
    )
}