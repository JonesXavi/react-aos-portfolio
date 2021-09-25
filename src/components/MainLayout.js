import React from 'react';

import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import Experience from './Experience';
import Contact from './Contact';

const MainLayout = () => (
  <div>
    <Header />
    <About />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
  </div>
);

export default MainLayout;
