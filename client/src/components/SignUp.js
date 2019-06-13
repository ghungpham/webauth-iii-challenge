import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    state = {
        username: "",
        password: "",
        department: ""
    };

    changeHandler = e => { 
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();

    }

    render() {
        return (
            <div className = "signup-form">
                <form onSubmit={this.submitHandler}>
                    <label htmlFor= "username">Username:</label>
                    <input
                        type = "text"
                        name = "username"
                        value = {this.state.username}
                        onChange = {this.changeHandler}
                    />
                    <label htmlFor= "password">Password:</label>
                    <input
                        type = "password"
                        name = "password"
                        value = {this.state.password}
                        onChange = {this.changeHandler}
                    />
                    <label htmlFor= "department">Department:</label>
                    <input
                        type = "text"
                        name = "department"
                        value = {this.state.department}
                        onChange = {this.changeHandler}
                    />

                    <button>Sign up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;