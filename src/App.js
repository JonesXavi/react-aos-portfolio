import React, { useEffect } from 'react';
import AOS from 'aos';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import 'aos/dist/aos.css';

import MainLayout from './components/MainLayout';
import MoreProjects from './components/MoreProjects';
import NotFound from './components/NotFound';

const App = () => {

  useEffect(() => {
    AOS.init({  easing: 'ease', duration: 1500 });
  }, []);

  return(
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='/projects' element={<MoreProjects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
};

export default App;
