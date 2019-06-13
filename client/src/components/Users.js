import React, { Component } from 'react';

class Users extends Component {
    state = {
        users : []
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        axios
        .create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            }
        })
        .get('http://localhost:4000/api/users')
        .then(res => {
            this.setState(() =>  ({ users: res.data }));
             })
        .catch(err => {
            console.log(err)
        })
    }
    
    render() {
        return (
            <div className= "users-list">
                {this.state.users.map(user => (
                    <div key= {user.id}>
                    <h6>Username: {user.username} </h6>
                    <h6>Department: {user.department} </h6>
                    </div>
                    ))};
            </div>
        );
    }
}

export default Users;