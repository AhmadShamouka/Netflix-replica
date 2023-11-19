// SectionThree.js
import React from 'react';
import './Landing.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '@fontsource/poppins'; // Import Poppins font
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome styles

const SectionThree = () => {
  return (
    <HelmetProvider>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      />
    </Helmet>
    <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">Watch everywhere</h3>
        <h5 className="feature__sub__title">
          Stream unlimited movies and TV shows on your phone, 
           tablet, laptop, and TV.
        </h5>
      </div>
      <div className="feature__image__container feature__3__image__container">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          alt="Feature image"
          className="feature__image feature__3__image"
        />
        <div
          className="feature__backgroud__video__container feature__3__backgroud__video__container"
        >
          <video
            autoPlay
            loop
            muted
            className="feature__backgroud__video feature__3__backgroud__video"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default SectionThree;
