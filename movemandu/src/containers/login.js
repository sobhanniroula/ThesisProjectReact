import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css"

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: "",
            password: ""
        };
    }
    
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    handleSubmit = event => {
        event.preventDefault();
    }
    
    render() {
        return (
        <div className="Loginbox">
            <h1> Login Form </h1>
        <div className="Login">
            <form id="LoginForm" onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
{/* We are setting the autoFocus flag for our email field, so that when our form loads, it sets focus to this field. */}
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
                </FormGroup>
                <Button block bsSize="large" disabled={!this.validateForm()} type="submit">Login</Button> 
{/* validateForm checks if the input field is empty or not */}
            </form>
        </div>
        </div>
        );
    }
}
