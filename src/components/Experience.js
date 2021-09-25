import React from 'react'

import { WorkExperience } from '../en';

const Experience = () => (
  <section className="experience" id="experience">
    <div className="container">
      <div className="section-heading">
        <h1>{WorkExperience.title}</h1>
        <h6>{WorkExperience.subTitle}</h6>
      </div>
      <div className="timeline" data-aos="zoom-in-up" data-aos-delay="600">
        <ul>
          {
            WorkExperience.experienceList.map((item, index) => (
              <li className="date" key={index}>
                <h1>{item.role} - {item.company}</h1>
                <h6>{item.duration}</h6>
                <p>
                    {item.responsibilites}
                </p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
