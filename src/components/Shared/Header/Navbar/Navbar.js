import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../../hooks/useFirebase/useFirebase';

const Navbar = () => {
    const { user,logOut} = useFirebase();
    return (
        <div>
            <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Service</Link>
            <Link to="/login">Login</Link>
            <Link to="/registration">Registration</Link>
            </div>
            <div>
                <h5>{ user.displayName}</h5>
                {
                    user.email ?
                        <Button onClick={logOut}>Log Out</Button> :
                        <Link to="/login"><Button>Log In</Button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;