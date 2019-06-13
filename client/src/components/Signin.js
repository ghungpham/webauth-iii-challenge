import React, { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
    state = {
        username: "",
        password: ""
    };

    changeHandler = e => { 
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        const endpoint = 'http://localhost:4000/api/login';
        
        axios
        .post(endpoint, this.state)
        .then(res => {
            console.log('RESPONSE', res.data);
            localStorage.setItem('jwt', res.data.token)
            this.props.history.push('/users')
        })
        .catch(err => {
            console.log('ERROR', err)
        })
    }

    render() {
        return (
            <div className = "signin-form">
                <form onSubmit = {this.submitHandler} >
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
                    <button>Sign in</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default Signin;