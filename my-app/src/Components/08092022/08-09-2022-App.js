import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import UserContext from "./Context/UserContext";
import About from "./Header/Nav/About";
import Contact from "./Header/Nav/Contact";
import Home from "./Header/Nav/Home";
import Profile from "./Header/Nav/Profile";
import Login from "./Login/Login";
import Editprofile from "./Main/Editprofile";
import Signup from "./Signup/Signup";
import VideoContext from "./Context/VideoContex";

function App() {
  const [videos, setVideos] = useState(localStorage.getItem('videos')? JSON.parse(localStorage.getItem('videos')) : []);
  const [currentUser, setCurrentUser] = useState(sessionStorage?.username);
  const setCurrentUserData = (data) => {
    setCurrentUser(data)
  }
  const setUserVideo = (videoList) => {
    setVideos(videoList)
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{loggedInUser: currentUser, setLoggedInUser: setCurrentUserData}}>
        <VideoContext.Provider value={{videoData: videos, setVideoData: setUserVideo}}>
          <div>
            <Routes>
              <Route index element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="profile" element={<Profile />} />
              <Route path="edit-profile" element={<Editprofile />} />
            </Routes>
          </div>
          </VideoContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
