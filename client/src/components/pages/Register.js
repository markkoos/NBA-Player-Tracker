import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { ADD_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client'; 
import { Link } from 'react-router-dom'; 
import Auth from '../../utils/auth';

export default function Register() {

    // set initial state of the form
    const [formData, setformData] = useState({ email: '', username: '', password: ''})
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);
    // create a constant to assign the add_user mutation to
    const [addUser, { error }] = useMutation(ADD_USER);

    // handlers for input change and submitting the form
    const handleInput = (e) => {
        // targets event and assigns it to variable
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // checks if form has everything it needs
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        try {
            const { data } = await addUser({
                variables: { ...formData }
            });

            if (!data) {
                console.log(error);
            };

            Auth.login(data.addUser.token);
        } catch (err) {
            console.log(err);
            setShowAlert(true);
        }

        setformData({
            email: '',
            username: '',
            password: '',
        });
    };

    return (
        <div>
            <br />
            <center><h2>Register</h2></center>
            <br />
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="form title">
                {/* show alert if server response is bad */}
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Something went wrong with your signup!
                </Alert>

                <Form.Group className='input'>
                <Form.Control
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    onChange={handleInput}
                    value={formData.email}
                    required
                />
                <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='input'>
                <Form.Control
                    type='text'
                    placeholder='Username'
                    name='username'
                    onChange={handleInput}
                    value={formData.firstName}
                    required
                />
                <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='input'>
                <Form.Control
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={handleInput}
                    value={formData.password}
                    required
                />
                <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                </Form.Group>
                <Button
                disabled={!(formData.username && formData.email && formData.password)}
                type='submit'
                variant='success'
                className="Submit btn btn-danger">
                    Submit
                </Button>                
            </Form>            
            <center><p className="register-link">Already have an account? <Link to="/login"><span className="a2">Login</span></Link></p></center>
            <br />
        </div>
    )
}