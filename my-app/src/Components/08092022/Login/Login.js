import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrormessage] = useState();
  const login = () => {
    if (username !== '' && password !== '') {
      const userList = JSON.parse(localStorage.getItem('userList'));
      userList?.map((user) => {
        let currentUser = JSON.parse(user);
        if (currentUser?.username === username && currentUser?.password === password) {
          setErrormessage('');
          sessionStorage.setItem('username', username)
          window.location.href = '/home';
        }
        else {
          setErrormessage('Enter correct credential');
        }
      })
    }
    else {
      setErrormessage('Enter user details');
    }
  }
  return (
    <div className="login">
      <h2>Login</h2>
      <div className="error-msg">{errorMessage}</div>
      <div className="login-control">
        <lable>Username:</lable>
        <div className="login-input">
          <input type="text" name="username" value={username}
            onChange={(event) => setUsername(event.target.value)} />
        </div>
      </div>
      <div className="login-control">
        <lable>Password:</lable>
        <div className="login-input">
          <input type="password" name="password" value={password}
            onChange={(event) => setPassword(event.target.value)} />
        </div>
      </div>
      <div className="login-control">
        <button type="button" onClick={login}>LOGIN</button>
      </div>
      <div>
        <Link to="/signup">Create Account</Link>
      </div>
    </div>
  );
};

export default Login;
