import React from 'react';
import Photo from '../Photo/Photo';
import car from '../imgs/img3.jpg';
import Banner from './banner';
import Section1 from './Section1';
import './main.css';
import MainSection from './SECTION/MainSection';

const Main = () => {
    return (
        <div className='common'>
            <div className='main'>
                <Banner/>
                <Section1/>
                <MainSection/>
            </div>
        </div>
    )
}

export default Main;