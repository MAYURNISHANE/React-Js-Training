import React, { useContext, useState } from 'react';
import UserContext from '../../Context/UserContext';
import VideoContext from '../../Context/VideoContex';

const VdoTabs = (props) => {
    const [activeTab, setActiveTab] = useState(props.videoTab[0].key);
    const tabToggle = (tab) => {
        setActiveTab(tab)
    }
    const { loggedInUser } = useContext(UserContext);
    const { videoData } = useContext(VideoContext)
    return (
        <div>
            <div className='section_video-text'>
                {props.videoTab.map((videoTab, index) => (
                    <span key={index} className={`${activeTab === videoTab.key ? 'active' : ''} video-text`} onClick={() => tabToggle(videoTab.key)} >{videoTab.title}</span>
                ))}
            </div>
            <div className='videos'>
                {props.videoTab.map((videoTab) => (
                    activeTab === videoTab.key &&
                    <div>
                        {typeof (videoTab.content) === 'object' ?
                            <>
                                <div className='vdocontent'>
                                    {videoData.map((video, index) => (
                                        <>
                                            {loggedInUser?.username == video.username &&
                                                <div className='vidsize'>
                                                    <h3>{video.title}</h3>
                                                    <iframe src={video.url} width='380px' height='200px' />
                                                </div>
                                            }
                                        </>
                                    ))}
                                </div></>
                            :
                            <div>{videoTab.content}</div>
                        }
                    </div>
                ))}
            </div>
        </div>

    );
}


export default VdoTabs;