import React from 'react';
import axios from 'axios';

const token= localStorage.getItem('jwt');
axios.defaults.baseURL = 'http://localhost:4000/api';

export default function(Component) {
    return class withAuth extends Component {
        render() {
            const notLoggedIn = <div>You shall not pass!!</div>

            return (
                <>
                  {token? <Component {...this.props} /> : notLoggedIn }  
                </>
            );
        }
    }
    
}