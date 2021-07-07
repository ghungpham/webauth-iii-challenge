import React, { Component } from 'react';
import axios from 'axios';

import './axiosauth';
import withAuth from './withAuth';

class Users extends Component {
    state = {
        users : []
    }

    componentDidMount() {
        axios
        .get('/users')
        .then(res => {
            this.setState(() => ({ users: res.data }));
            })
        .catch(err => {
            console.log(err.data)
        })
    }
    
    render() {
        return (
            <div className= "users-list">
                <h3>Users List</h3>
                {this.state.users.map(user => (
                    <div key= {user.id}>
                    <h6>Username: {user.username} </h6>
                    <h6>Department: {user.department} </h6>
                    </div>
                    ))}
            </div>
        );
    }
}

export default withAuth(Users);