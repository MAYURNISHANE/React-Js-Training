import React from 'react';
import Vdo from '../../vdo/Vdo';
import s1 from '..//../videos/1.mp4';
import s2 from '..//../videos/2.mp4';
import s3 from '..//../videos/3.mp4';

const ShareSection = () => {
  return (
    <div className='vdo'>
      <span><Vdo vdo={s3} /></span>
      <span className='just'> <Vdo vdo={s2} /></span>
      <span><Vdo vdo={s1} /></span>
    </div>
  )
}

export default ShareSection