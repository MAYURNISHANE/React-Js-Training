import React from 'react';
import Header from '../Header';

const About = () => {
  return (
    <div>
      <Header />
      <div className='common'>
        <h2>ABOUT PAGE</h2>
        <div className>React is a JavaScript library for building user interfaces.<br />

          React is used to build single-page applications.<br />

          React allows us to create reusable UI components.
        </div>
        <img src='./favicon.ico' alt='' />
                <p>React, sometimes referred to as a frontend JavaScript framework,<br /> is a JavaScript library created by Facebook.<br />
                    React is a tool for building UI components.

                </p>
      </div>
    </div>
  )
}

export default About;