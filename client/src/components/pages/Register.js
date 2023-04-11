import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { ADD_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client'; 
import { Link } from 'react-router-dom'; 

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
            <center><p className="register-link">Already have an account? <Link to="/login"><span className="a2">Login</span></Link></p></center>            
        </div>
    )
}