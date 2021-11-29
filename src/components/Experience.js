import React from 'react';

import ExperienceCard from './ExperienceCard';
import { WorkExperience } from '../en';

const Experience = () => (
  <section className="experience" id="experience">
    <div className="container">
      <div className="section-heading">
        <h1>{WorkExperience.title}</h1>
        <h6>{WorkExperience.subTitle}</h6>
      </div>
      <div className="experience-cards-div">
        {WorkExperience.experienceList.map((card, i) => {
          return (
            <ExperienceCard key={i} 
              cardInfo={{
                role: card.role,
                company: card.company,
                companylogo: card.companylogo,
                duration: card.duration,
                desc: card.responsibilites,
                aos: card.aos
              }}
            />
          );
        })}
      </div>
    </div>
  </section>
);

export default Experience;
