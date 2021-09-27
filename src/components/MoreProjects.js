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
    <div className="mpro-container">
      <Link to="/" className="nf-btn project-back-btn">
        <i className="fas fa-chevron-left"></i> Back to Main Page
        </Link>
      <div className="section-heading">
        <h1>{ProjectsData.title}</h1>
      </div>
      <div className="wrapper-flex">
        {
          ProjectsData.projectList.map((item, index) => (
            <div className="projects-container" key={index}>
              <img className='projects-banner-img' src={item.projectImg} alt="Project Img" />
              <h1 className="projects-name">{item.title}</h1>
              <p className="projects-description">{item.description}</p>
              <div className="wrapper-flex">
              {
                item.techStack.map((i, idx) => (
                  <span className="projects-tech-stack" key={idx}>{i}</span>
                ))
              }
              </div>
              <div className="wrapper-flex">
                <a className="github-btn" href={item.githubUrl} target="_blank" rel="noreferrer" title="Github Site"><i className="fab fa-github"></i></a>
                <a className="site-btn" href={item.demoUrl} target="_blank" rel="noreferrer" title="Demo Site"><i className="fas fa-globe"></i></a>
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
