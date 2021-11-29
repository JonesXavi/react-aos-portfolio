import React from 'react'

const Footer = () => {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return(
    <footer className="copyright">
      <div className="up" id="up">
        <i className="fas fa-chevron-up" onClick={scrollToTop}></i>
      </div>
      <p>Portfolio made with  <i className="fas fa-heart" style={{color: 'red'}}></i></p>
    </footer>
  )
};

export default Footer;
