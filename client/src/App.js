import React from 'react';
import { Route, NavLink } from "react-router-dom";
import SignUp from "./components/SignUp";
import Signin from "./components/Signin";
import Users from './components/Users';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <nav>
      <NavLink to = "/signup">Sign Up</NavLink>
      <NavLink to = "/signin">Sign in</NavLink>
      <button onClick = {this.logout} >Log Out</button>
      </nav>

      <Route path = "/signup" component = {SignUp} />
      <Route path = "/signin" component = {Signin} />
      <Route path = "/users" component = {Users} />

    </div>
  )
  }

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/signin');
  }

}



export default App;
