import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import useFirebase from '../../hooks/useFirebase/useFirebase';

const Login = () => {
    const {signInUsingGoogle}=useAuth();
    return (
        <div>
            <h4>This islogin</h4>
            <div className="container form-container">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="submit-button" variant="primary" type="submit">Login</Button>
                    <br />
                <Link to="/registration">New User</Link>
                    <p>Or</p>
                <Button onClick={signInUsingGoogle} className="button">Google Sign In</Button>
                <Button className="button">Twiter Sign In</Button>
                </Form>
               
           </div>
        </div>
    );
};

export default Login;