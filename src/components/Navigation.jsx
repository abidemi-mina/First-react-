import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return(
        <Nav className='justify-content-center  bg-dark'>
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/post">Post</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav.Item> */}
        </Nav>
  );
}
export default Navigation;
