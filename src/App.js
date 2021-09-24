import React, { useEffect } from 'react';
import AOS from 'aos';

// Styles
import './App.css';
import 'aos/dist/aos.css';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';

const App = () => {

  useEffect(() => {
    AOS.init({  easing: 'ease', duration: 1500 });
  }, []);

  return(
    <div>
      <Header />
      <About />
      <Projects />
      <Experience />
      <Footer />
  </div>
  )
};

export default App;
