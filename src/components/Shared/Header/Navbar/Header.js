import Button from '@restart/ui/esm/Button';
import React from 'react';
import './navbar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';


  const signOut = () => {
    logOut()
      .then(() => {
        history.push(redirect_uri);
      // Sign-out successful.
      }).catch((error) => {
      // An error happened.
        
      });
  }

    return (
<div className="mb-3">
<div className="top-header bg-dark d-flex">
        <p className="text-white">support@medibles.com</p>
            <small className="text-white">Address: 25/D, Khanbangla Road, Kolkolani, Jamalpur</small>
 </div>

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/home" className='site-title'>M<span className='medi'>edibles</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto menu-items">
      <Nav.Link className="menu-item" href="/home#home">Home</Nav.Link>
      <Nav.Link className="menu-item" href="/about">About</Nav.Link>
      <Nav.Link className="menu-item" href="/home#service">Service</Nav.Link>
      <Nav.Link className="menu-item" href="/contact">Contact</Nav.Link>
      <Nav.Link className="menu-item" href="/articles">Articles</Nav.Link>
      <Nav.Link className="menu-item" href="/login">Login</Nav.Link>
                        </Nav>
    <Navbar.Text className="justify-content-end">
            <p>{user.displayName}</p>
            {
            user.email ?
              <Button className="btn btn-warning" onClick={signOut}>Sign Out</Button> :
              <Link to="/registration"><Button className="btn btn-warning">Sign Up</Button></Link>
          }
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;