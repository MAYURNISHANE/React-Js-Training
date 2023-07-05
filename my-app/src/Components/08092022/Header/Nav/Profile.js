import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../Context/UserContext';
import Header from '../Header';

const Profile = (props) => {
    /*const currentUser = sessionStorage.username;
    const userList = JSON.parse(localStorage.userList);
    const [userData, setUserData] = useState();
    useEffect(()=>{
        userList?.map((user) => {
            let logUser = JSON.parse(user);
            if(logUser.username ===currentUser){
                setUserData(logUser);
            }
        })
    }, [userData])*/
    const { loggedInUser } = useContext(UserContext);
    return (
        <div>
            <Header />
            <div className='common'>
                <h2>Profile Page</h2>
                <h3>User Information</h3>
                <div>NAME: {loggedInUser?.fullname} </div>
                <div>E-MAIL: {loggedInUser?.email} </div>
                <div>MOB.NO.: {loggedInUser?.contact}</div>
                <div>CITY: {loggedInUser?.address}</div>
            </div>
        </div>
    )
}

export default Profile;