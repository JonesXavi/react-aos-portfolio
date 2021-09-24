import React from 'react';

import { AboutData } from '../en';

const About = () => (
  <section className="about" id="about">
    <div className="container">
      <div className="profile-img" data-aos="fade-right" data-aos-delay="200">
        <img src={AboutData.profileImg} alt="Profile Img" className="profile-img" />
      </div>
      <div className="about-details" data-aos="fade-left" data-aos-delay="400">
        <div className="about-heading">
          <h1>{AboutData.title}</h1>
          <h6>{AboutData.subTitle}</h6>
        </div>
        <p>
          {AboutData.content}
        </p>
      </div>
    </div>
  </section>
);

export default About;