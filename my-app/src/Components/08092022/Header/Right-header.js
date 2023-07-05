import React, { useContext, useState } from 'react';
import UserContext from '../Context/UserContext';
import VideoContext from '../Context/VideoContex';
import Nav from './Nav/Nav';

const Right_header = () => {
  const [dialog, setDialog] = useState(false);
  const { loggedInUser } = useContext(UserContext)
  const showPopup = (value) => {
    setDialog(value)
  }
  const [videoTitle, setVideoTitle] = useState();
  const [videoURL, setVideoURL] = useState();
  const { setVideoData } = useContext(VideoContext)
  const [videoError, setVideoError] = useState('');
  const uploadVideo = () => {
    if (videoTitle === '' || videoURL === '') {
      setVideoError('enter')
    }
    else {
      setVideoError('');
      const video =
      {
        username: loggedInUser?.username,
        title: videoTitle,
        url: videoURL
      }
      const videoList = localStorage.getItem('videos') ? JSON.parse(localStorage.getItem('videos')) : [];
      videoList.push(video);
      localStorage.setItem('videos', JSON.stringify(videoList));
      setVideoData(videoList);
    }
    showPopup(false);
  }

  const [videoOptionTab, setVideoOptionTab] = useState('youtube');
  const selectVideoTab = (tabs) => {
    setVideoOptionTab(tabs);
  }
  const [localVideo, setLocalVideo] = useState();
  const setVideoFromLocal = (event) => {
    console.log(event.target.files[0])
    //if (localVideo?.type === "video/mp4") {
    setLocalVideo(event.target.files[0]?.name);
    }
//  }

  const [openNav, setNav] = useState(false);
  return (
    <div>
      <div className='header-right'>
        <span className='upload-video' onClick={() => showPopup(true)}><button>UPLOAD VIDEO</button></span>

        <span onClick={(e) => { e.preventDefault(); setNav(!openNav); }}> <i class="fa-solid fa-ellipsis-vertical"></i></span>
        {openNav &&
          <Nav />
        }
      </div>
      {dialog &&
        <div>
          <div className='upload-video_overlay' onClick={() => showPopup(false)}></div>
          <div className='upload-video_modal'>
            <div className='upload-video_option'>
              <span onClick={() => selectVideoTab('youtube')} className={`${videoOptionTab === 'youtube' ? 'active' : ''}`}>Youtube</span>
              <span onClick={() => selectVideoTab('computer')} className={`${videoOptionTab === 'computer' ? 'active' : ''}`}>Computer</span>
            </div>
            {videoOptionTab === 'youtube' &&
              <h2>Upload Video From Youtube</h2>
            }
            {videoOptionTab === 'computer' &&
              <h2>Upload Video From Computer</h2>
            }
            <div className='error-msg'>{videoError}</div>
            <div className='video'>
              <input type='text' value={videoTitle} onChange={(event) => setVideoTitle(event.target.value)} placeholder='Enter video title here' />
            </div>
            <div className='video'>
              {videoOptionTab === 'youtube' &&
                <input type='text' value={videoURL} onChange={(event) => setVideoURL(event.target.value)} placeholder='Enter youtube embed url here' />
              }
              {videoOptionTab === 'computer' &&
                <div className='computer-file'>
                  <input type='file' onChange={(event) => setVideoFromLocal(event)} />
                  <span>Select Video from Computer</span>
                </div>
              }
            </div>
            {localVideo &&
              <video controls>
                <source src={`./${localVideo?.name}`} />
              </video>
            }
            <div><button type='submit' onClick={uploadVideo}>Upload</button></div>
          </div>
        </div>

      }
    </div>
  )
}

export default Right_header;