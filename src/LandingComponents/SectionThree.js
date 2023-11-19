// SectionThree.js
import React from 'react';
import './Landing.css'

const SectionThree = () => {
  return (
    <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">Watch everywhere.</h3>
        <h5 className="feature__sub__title">
          Stream unlimited movies and TV shows on your phone, tablet,
          laptop, and TV.
        </h5>
      </div>
      <div className="feature__image__container feature__3__image__container">
    
        <div
          className="feature__backgroud__video__container feature__3__backgroud__video__container"
        >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
