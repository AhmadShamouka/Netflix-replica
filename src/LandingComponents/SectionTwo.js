// SectionTwo.js
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '@fontsource/poppins'; // Import Poppins font
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome styles
import './Landing.css'


const SectionTwo = () => {
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
        <h3 className="feature__title">
          Download your shows to watch offline
        </h3>
        <h5 className="feature__sub__title">
          Save your favorites easily and always have something to watch
        </h5>
      </div>
      <div className="feature__image__container">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt="Feature image"
          className="feature__image"
        />
        <div className="feature__2__poster__container">
          <div className="poster__container">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="poster"
              className="poster"
            />
          </div>
          <div className="poster__details">
            <h4>Stranger Things</h4>
            <h6>Downloading...</h6>
          </div>
          <div className="download__gif__container">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt="downloading gif"
              className="gif"
            />
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default SectionTwo;
