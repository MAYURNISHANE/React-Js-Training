import React from 'react';
//import MySection from './mySection';
//import ShareSection from './ShareSection';
import './MainSection.css';
import VdoTabs from './VdoTabs';
import vdo from '../../videos/3.mp4';
import vdo1 from '../../videos/test.mp4';

const MainSection = () => {
  const videoList = JSON.parse(localStorage.getItem ('videos'))
  const videoTab = [
    {
      key: 'my-video',
      title: 'MY VIDEO',
      content: videoList
    },
    {
      key: 'shared-video',
      title: 'SHARED VIDEO',
      content: [{
        videoURL: vdo
      },
      {
        videoURL: vdo1
      },
      {
        videoURL: vdo
      }
      ]

    }
  ]


  return (
    <div className='MainSection'>
      <VdoTabs videoTab={videoTab} />
    </div>
  )
}

export default MainSection;