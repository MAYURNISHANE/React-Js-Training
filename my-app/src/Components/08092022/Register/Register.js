import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
import "../Login/login.css";

const Register = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const [username, setUsername] = useState(props.page === 'edit' ? loggedInUser?.username : '');
  const [fullname, setFullname] = useState(props.page === 'edit' ? loggedInUser?.fullname : '');
  const [email, setEmail] = useState(props.page === 'edit' ? loggedInUser?.email : '');
  const [contact, setContact] = useState(props.page === 'edit' ? loggedInUser?.contact : '');
  const [address, setAddress] = useState(props.page === 'edit' ? loggedInUser?.address : '');
  const [password, setPassword] = useState(props.page === 'edit' ? loggedInUser?.password : '');
  const [errorMessage, setErrormessage] = useState('');
  const [UsernameCheck, setUsernameCheck] = useState(false);
  const [suggestion, setSuggestion] = useState();
  const validateUser = () => {
    let valid = false;
    if (username !== '' && fullname !== '' && email !== '' && contact !== '' && password !== '')
      valid = true;
    return valid;
  };
  const userAlreadySignup = (userList, username) => {
    const filteredList = userList?.filter((user) => {
      const Userobject = JSON.parse(user);
      if (Userobject?.username == username) {
        return user;
      }
    })
    return filteredList;
  }

  const RegisterUser = (userList, users) => {
    if (userAlreadySignup(userList, users.username).length > 0) {
      setUsernameCheck(users?.username)
      //setSuggestion(users.username + '123')
      let value = Math.random() * 10;
      if (userAlreadySignup(userList, users.username + parseInt(value)).length === 0) {
        setSuggestion(users.username + parseInt(value))
      }
      else {
        setSuggestion(users.username + parseInt(value))
      }

    }
    else {
      setUsernameCheck(false)
      userList.push(JSON.stringify(users));
      localStorage.setItem('userList', JSON.stringify(userList));
      console.log('userList', userList);
      setErrormessage('')
      window.location.href = '/';
    }
  }
  const UpdateProfile = (userList, users) => {
    const filteredList = userList.filter((user) => {
      const Userobject = JSON.parse(user);
      if (Userobject?.username !== loggedInUser?.username) {
        return (user)
      }
    })
    filteredList.push(JSON.stringify(users));
    localStorage.setItem('userList', JSON.stringify(filteredList));
    setErrormessage('');
    window.location.href = '/home';
  }


  const SaveProfile = () => {
    if (validateUser()) {
      const users = {
        username: username,
        fullname: fullname,
        email: email,
        contact: contact,
        address: address,
        password: props.page === 'edit' ? loggedInUser?.password : password
      };
      let userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
      if (props.page === 'edit') {
        UpdateProfile(userList, users)
      }
      else {
        RegisterUser(userList, users)
      }
    }
    else {
      setErrormessage("Please enter all input field");
    }
  };
  return (
    <div>
      <div className="error-msg">{errorMessage}</div>
      <div className="login-control">
        <lable>Username:</lable>
        <div className="login-input">
          <input type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
      </div>
      {UsernameCheck &&
        <div className="error-msg">{UsernameCheck} is already taken. {suggestion && <>some more suggestion like: {suggestion}</>}</div>
      }
      <div className="login-control">
        <lable>Fullname:</lable>
        <div className="login-input">
          <input type="text"
            name="fullname" value={fullname} onChange={(event) => setFullname(event.target.value)} />
        </div>
      </div>
      <div className="login-control">
        <lable>E-mail:</lable>
        <div className="login-input">
          <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
      </div>
      <div className="login-control">
        <lable>Contact No.:</lable>
        <div className="login-input">
          <input type="number" name="contact" value={contact} onChange={(event) => setContact(event.target.value)} />
        </div>
      </div>
      <div className="login-control">
        <lable>Address:</lable>
        <div className="login-input">
          <input type="text" name="address" value={address} onChange={(event) => setAddress(event.target.value)} />
        </div>
      </div>
      {props.page !== "edit" && (
        <div className="login-control">
          <lable>Password:</lable>
          <div className="login-input">
            <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
        </div>
      )}
      <div className="login-control">
        <button type="button" onClick={SaveProfile}>{props.page === "edit" ? 'Update' : 'SignUp'} </button>
      </div>
    </div>
  );
};

export default Register;
