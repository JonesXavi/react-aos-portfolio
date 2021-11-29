import React from 'react';

import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import Experience from './Experience';
import Contact from './Contact';
import Skills from './Skills';

const MainLayout = () => (
  <div>
    <Header />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
  </div>
);

export default MainLayout;
