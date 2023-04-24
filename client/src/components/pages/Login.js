import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Login() {
    return (
        <div>
            <br></br>
            <center><h2>Login</h2></center>
            <br></br>
            <center><input type="text" placeholder="Username"></input></center>
            <br></br>
            <center><input type="text" placeholder="Password"></input></center>
            <br></br>
            <center><input className="btn btn-primary" type="submit" value="Submit"></input></center>
            <br></br>
            <center><p className="register-link">Don't have an account? <Link to="/register"><span className="a2">Register</span></Link></p></center>            
        </div>
    )
}