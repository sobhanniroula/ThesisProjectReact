import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Routes from "./Routes";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className = "App container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/"> Movemandu </Link> 
                        </Navbar.Brand> 
                        <Navbar.Toggle />
                    </Navbar.Header> 
                    <Navbar.Collapse>
                        <Nav pullLeft>
                            <LinkContainer to="/services"><NavItem>Services</NavItem></LinkContainer>
                            <LinkContainer to="/students"><NavItem>Students</NavItem></LinkContainer>
                            <LinkContainer to="/owners"><NavItem>Owners</NavItem></LinkContainer>
                            <LinkContainer to="/dealers"><NavItem>Dealers</NavItem></LinkContainer>
                            <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
                            
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to="/signup"><NavItem>Signup</NavItem></LinkContainer>
                            <LinkContainer to="/login"><NavItem>Login</NavItem></LinkContainer>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                <Routes />
            </div>
        );
    }
}

export default App;
