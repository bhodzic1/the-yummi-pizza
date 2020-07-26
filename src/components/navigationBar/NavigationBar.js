import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { CartIcon } from '../icons';
import { CartContext } from '../../context/CartContext';

const Styles = styled.div`
  .navbar {
    background-color: white;
  }
  .nav-item, navbar-brand {
    padding: 10px;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: black;
    }
  }
`;


export const NavigationBar = () => {
  const {itemCount} = useContext(CartContext);
    return (
    <Styles>
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand href="/">THE YUMMI PIZZA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              
                <Link to="/">Home</Link>
              
            </Nav.Item>
            <Nav.Item>
              
                <Link to="/order">Menu/Order</Link>
              
            </Nav.Item>
            <Nav.Item>
              
                <Link to="/cart"><CartIcon width={"20px"} />Cart ({itemCount})</Link>
              
            </Nav.Item>
            <Nav.Item>
              
                <Link to="/login">Login</Link>
              
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles >
    )
    }

export default NavigationBar;