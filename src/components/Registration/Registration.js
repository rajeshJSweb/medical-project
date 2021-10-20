import Button from '@restart/ui/esm/Button';
import './Registration.css'
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';

const Registration = () => {
    const { signInUsingGoogle, handleUserRegister} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from ||'/home';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmailSubmit = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
      }
    
      const handlePasswordSubmit = e => {
          setPassword(e.target.value);
          console.log(e.target.value);
    }

    const handleRegister = e => {

        handleUserRegister(email, password);
        e.preventDefault();
    };
    

    const handleGoogleLogin = () => {
      signInUsingGoogle()
      .then(result => {
          history.push(redirect_uri);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    
    return (
        <div>
        <div className="container form-container">
                <Form onSubmit={handleRegister}>
                    <h3>Create new account</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailSubmit} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordSubmit} type="password" placeholder="Password" />
                </Form.Group>
                <input className="btn btn-danger my-3" type="submit" value="Register" />
                    <br />
                <Link className="already my-3" to="/login">Already User?</Link>
                    <p>Or</p>
                <Button onClick={handleGoogleLogin } className="button">Google Sign In</Button>
                </Form>
               
           </div>
        </div>
    );
};

export default Registration;