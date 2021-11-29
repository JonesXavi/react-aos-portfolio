import React from 'react';

import { skillsSection } from '../en';

const Skills = () => (
  <section id="skills">
    <div className="container">
      <div className="about-heading">
        <h1>{skillsSection.title}</h1>
      </div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
