import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

import './Header.css';
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar
        className='nav-main'
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <span className='logo-full-txt'>
              {' '}
              <span className='logo-txt'>Tour</span>Planet{' '}
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto mx-auto'>
              <Nav.Link as={Link} className='nav-link ' to='/'>
                Home
              </Nav.Link>

              {user?.email && (
                <>
                  <Nav.Link as={Link} className='nav-link ' to='/mybooking'>
                    My Bookings
                  </Nav.Link>
                  <Nav.Link as={Link} className='nav-link ' to='/managebooking'>
                    Manage All Bookings
                  </Nav.Link>
                  <Nav.Link as={Link} className='nav-link ' to='/addbooking'>
                    Add New Booking
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={Link} className='nav-link ' to='/about'>
                About
              </Nav.Link>
              <Nav.Link as={Link} className='nav-link ' to='/contact'>
                Contact{' '}
              </Nav.Link>
            </Nav>
            <Nav>
              {user?.email ? (
                <span className='logOut-btn mx-auto me-auto'>
                  <span className='username'>{user?.email}</span>
                  <Button onClick={handleSignOut} variant='outline-warning'>
                    Log Out
                  </Button>
                </span>
              ) : (
                <Nav>
                  <Nav.Link as={Link} to='/login' className='fs-5 nav-link'>
                    Log in
                  </Nav.Link>
                </Nav>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
