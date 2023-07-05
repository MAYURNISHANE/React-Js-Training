import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Photo from '../Photo/Photo';
import profile from '../imgs/mayur.png';
import UserContext from '../Context/UserContext';
import './main.css'

const Section1 = () => {
    const currentUser = sessionStorage.username;
    const userList = JSON.parse(localStorage.userList);
    const [userData, setUserData] = useState();
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    
    useEffect(()=> {
        userList?.map((user) =>{
            let logUser = JSON.parse(user);
            if (logUser?.username === currentUser){
                setUserData(logUser);
                setLoggedInUser(logUser);
            }
        })
    },[!userData])
    const navigate = useNavigate();
    const editProfile = () => {
        navigate('/edit-profile')
    }
    return (
        <div className='section1'>
            <div className='left-section1'>
                <Photo variation="profile" photo={profile} />
                <div className='left-section1_text'>
                    <h3>{loggedInUser?.fullname}</h3>
                    <span>{loggedInUser?.address}</span>
                </div>
            </div>
            <div className='right-section1'>
                <button onClick={editProfile}><i class="fa-solid fa-pencil">_</i>PROFILE EDIT</button>
            </div>

        </div>
    )
}

export default Section1;