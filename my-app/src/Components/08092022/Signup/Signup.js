import React from 'react';
import { Link } from "react-router-dom";
import Register from '../Register/Register';
import "../Login/login.css";

const Signup = () => {
  return (
    <div className='login'>
        <h2>SignUp</h2>
        <Register/>
        <Link to="/">Back to Login</Link>
      
    </div>
  )
}

export default Signup;