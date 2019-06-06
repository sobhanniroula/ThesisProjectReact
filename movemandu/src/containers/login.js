import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { Auth } from "aws-amplify";
import "./Login.css"

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoading: false,
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
    
    handleSubmit = async event => {
        event.preventDefault();
        
        this.setState({ isLoading: true });

        try {
            await Auth.signIn(this.state.email, this.state.password);
            this.props.userHasAuthenticated(true);
            this.props.history.push("/");
        } catch (e) {
            alert(e.message);
            this.setState({ isLoading: false });
        }
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
                <LoaderButton block bsSize="large" disabled={!this.validateForm()} type="submit" isLoading={this.state.isLoading} text="LOGIN" loadingText="Logging in..." /> 
{/* validateForm checks if the input field is empty or not */}
            </form>
        </div>
        </div>
        );
    }
}
