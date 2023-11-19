// SectionFour.js
import React from 'react';
import './Landing.css'

const SectionFour = () => {
  return (
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
  );
};

export default SectionFour;
