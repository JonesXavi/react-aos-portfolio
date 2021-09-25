import React from "react";
import { Link } from "react-router-dom";

import { ProjectsData } from "../en";

const Projects = () => (
  <section className="project text-center" id="projects">
    <div className="container">
      <div className="section-heading">
        <h1>{ProjectsData.title}</h1>
        <h6>{ProjectsData.subTitle}</h6>
      </div>
      {
        ProjectsData.projectList.map((item, index) => (
          <div className="project-item" key={index}>
            <div className="project-img has-margin-right" data-aos={item.aos1.type} data-aos-delay={item.aos1.delay}>
              <img src={item.projectImg} alt="Project Img" />
            </div>
            <div className="project-description" data-aos={item.aos2.type} data-aos-delay={item.aos2.delay}>
              <img alt="Tech Logo" className="globe-icon" src={item.stackImg} />
              <h1>{item.title}</h1>
              <p>
                {item.description}
              </p>
              <div className="project-action">
                <a href={item.demoUrl} target="_blank" rel="noreferrer"><img alt={ProjectsData.demoSite} className="globe-icon" src={ProjectsData.globeImg} /></a>
                <a href={item.githubUrl} target="_blank" rel="noreferrer"><img alt={ProjectsData.githubSite} className="github-icon" src={ProjectsData.githubImg} /></a>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    <Link to="/projects" className="neon-button">
    Show More Projects ...
    </Link>
  </section>
);

export default Projects;