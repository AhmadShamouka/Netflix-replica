// Hero.js
import React from 'react';
import './Landing.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg__image__container">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/504c814b-57c3-43af-ab7b-4def88fd3a89/LB-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg"          alt="BG hero image"
          className="hero__bg__image"
        />
      </div>
      <div className="hero__bg__overlay"></div>

      <div className="hero__card">
        <h1 className="hero__title">
          Unlimited Movies TV, Shows and more
        </h1>
        <p className="hero__subtitle">Watch anywhere and cancel anytime.</p>
        <p className="hero__description">
          Ready to watch? Enter your email to create or restart your
          membership.
        </p>

        <div className="email__form__container">
          <div className="form__container">
            <input type="email" className="email__input" placeholder=" " />
            <label className="email__label">Email Address</label>
          </div>
          <button className="primary__button">
            Get Started <i className="fal fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
