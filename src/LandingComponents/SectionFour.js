// SectionFour.js
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '@fontsource/poppins'; // Import Poppins font
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome styles
import './Landing.css'

const SectionFour = () => {
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
        <h3 className="feature__title">Create profiles for Kids</h3>
        <h5 className="feature__sub__title">
        Send kids on adventures with their favorite characters in 
        a space made just for them—free with your membership.
        </h5>
      </div>
      <div className="feature__image__container">
        <img
          src="https://occ-0-4023-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
          alt="Feature image"
          className="feature__image"
        />
      </div>
    </div>
    </HelmetProvider>
  );
};

export default SectionFour;
