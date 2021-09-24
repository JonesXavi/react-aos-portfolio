import React from 'react'

import { WorkExperience } from '../en';

const Experience = () => (
  <section class="experience" id="experience">
    <div class="container">
      <div class="section-heading">
        <h1>{WorkExperience.title}</h1>
        <h6>{WorkExperience.subTitle}</h6>
      </div>
      <div class="timeline" data-aos="zoom-in-up" data-aos-delay="200">
        <ul>
          {
            WorkExperience.experienceList.map((item, index) => (
              <li class="date" key={index}>
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
