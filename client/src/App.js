import React from 'react';
import { Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Signin from "./components/Signin";


function App() {
  return (
    <div className="App">
      <Link to = "/signup">Sign Up</Link>
      <Link to = "/signin">Sign in</Link>

      <Route path = "/signup" component = {SignUp} />
      <Route path = "/signin" component = {Signin} />
    </div>
  );
}

export default App;
