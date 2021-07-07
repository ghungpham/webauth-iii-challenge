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
        const endpoint = 'http://localhost:4000/api/register';
        axios
        .post(endpoint, this.state)
        .then(res => {
            console.log('RESPONSE', res.data);
        })
        .catch(err => {
            console.log('ERROR', err)
        })
        this.props.history.push('/signin')
    }

    render() {
        return (
            <div className = "signup-form">
                <form onSubmit={this.submitHandler}>
                    <div>
                    <label htmlFor= "username">Username</label>
                    <input
                        type = "text"
                        name = "username"
                        value = {this.state.username}
                        onChange = {this.changeHandler}
                        />
                    </div>
                    <div>
                    <label htmlFor= "password">Password</label>
                    <input
                        type = "password"
                        name = "password"
                        value = {this.state.password}
                        onChange = {this.changeHandler}
                        />
                    </div>  
                    <div>  
                    <label htmlFor= "department">Department</label>
                    <input
                        type = "text"
                        name = "department"
                        value = {this.state.department}
                        onChange = {this.changeHandler}
                        />

                    </div>
                    <div><button>Sign up</button></div>
                </form>
            </div>
        );
    }
}

export default SignUp;