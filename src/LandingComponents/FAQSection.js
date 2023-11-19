// FAQSection.js
import React, { useEffect } from 'react';
import './Landing.css'


const FAQSection = () => {

  return (
   

    <section class="FAQ__list__container">
    <h1 class="FAQ__heading">Frequently Asked Questions</h1>
    <div class="FAQ__list">
      <div class="FAQ__accordian">
        <button class="FAQ__title">
          What is Netflix?<i class="fal fa-plus"></i>
        </button>
        <div class="FAQ__visible">
          <p>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows,
           movies, anime, documentaries, and more on thousands of internet-connected devices.
          </p>
          <p>
          You can watch as much as you want, whenever you want without a single commercial - all
          for one low monthly price. There's always something new to discover and new TV shows and
          movies are added every week!
          </p>
        </div>
      </div>
      
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div class="email__form__container">
            <div class="form__container">
              <input type="email" class="email__input" placeholder=" " />
              <label class="email__label">Email Address</label>
            </div>
            <button class="primary__button">
              Get Started <i class="fal fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
  );
};

export default FAQSection;
