import React, { useState } from 'react';
import Photo from '../Photo/Photo';
import car from '../imgs/img3.jpg';

import './main.css';

const Banner = () => {
    const [edit, setEdit] = useState(false);
    const bannerlist = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg', 'banner4.jpg', 'banner5.jpg', 'banner6.jpg'];
    const [selectedBanner, setSelectedBanner] = useState(bannerlist[0]);
    const selectBanner = (image) => {
        setSelectedBanner(image);
    }
    const saveBannerImage = () => {
        setEdit(false);
    }
    return (
        <div>
            <div className='banner-section'>
                <img src={`./banners/${selectedBanner}`} alt="banner" className='banner'/>
                <div onClick={() => setEdit(true)}><i class="fa-solid fa-square-pen"></i></div>
            </div>
            {edit &&
            <div>
                <div className='banner-overlay' onClick={() => setEdit(false)}></div>
                <div className='banner-list'>
                    {bannerlist.map((image) =>(
                        <div onClick={() => selectBanner(image)}>
                            <img className='image-list' src= {`./banners/${image}`} alt="" />
                        </div>
                    ))}
                    <button className='save' onClick={saveBannerImage}>SAVE</button>
                </div>
            </div>
            }
        </div>
    )
}

export default Banner;