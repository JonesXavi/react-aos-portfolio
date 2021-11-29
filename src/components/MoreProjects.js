import React from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

import { ProjectsData } from "../en";

const MoreProjects = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
  <section>
    <div className="projects-container">
      <Link to="/" className="nf-btn projects-back-btn">
        <i class="fas fa-hand-point-left"></i>
      </Link>
      <div className="section-heading">
        <h1>{ProjectsData.title}</h1>
      </div>
      <div className="projects-cards-div">
        {
          ProjectsData.projectList.map((item, index) => (
            <div className="project-card">
              <div className="project-image-div">
                <img src={item.projectImg} alt="Project Img" />
              </div>
              <div className="project-detail-div text-center">
                <h5 className="project-title">
                  {item.title}
                </h5>
                <p className="project-external-links-icon">
                    <a href={item.githubUrl} target="_blank" rel="noreferrer" title="Github Site">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={item.demoUrl} target="_blank" rel="noreferrer" title="Demo Site">
                      <i class="fas fa-globe"></i>
                    </a>
                </p>
                <p className="project-subtitle">
                  {item.description}
                </p>
              </div>
              <div className="project-card-footer">
                {item.techStack.map((v, i) => {
                  return (
                    <span key={i} className="project-tag">{v}</span>
                  );
                })}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </section>
  )
};

export default MoreProjects;
