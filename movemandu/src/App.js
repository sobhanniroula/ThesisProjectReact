import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Routes from "./Routes";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className = "App container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'> Movemandu </Link> 
                        </Navbar.Brand> 
                        <Navbar.Toggle />
                    </Navbar.Header> 
                    <Navbar.Collapse>
                        <Nav pullLeft>
                            <NavItem href="/services">Services</NavItem>
                            <NavItem href="/">Students</NavItem>
                            <NavItem href="/">Owners</NavItem>
                            <NavItem href="/">Dealers</NavItem>
                            <NavItem href="/">About</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem href="/signup">Signup</NavItem>
                            <NavItem href="/login">Login</NavItem>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                <Routes />
            </div>
        );
    }
}

export default App;
