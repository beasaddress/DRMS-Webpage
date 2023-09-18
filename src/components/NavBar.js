import React from 'react';
import '../styles/NavBar.css';


export default function NavBar({ currentPage, handlePageChange, scrollToFooter }) {
  return (
    <div className="nav-bar">
        
            <div className="text-wrapper">DRMS</div> 
                <div className="text-wrapper-2">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                     </a>
                 </div>
      <div className="text-wrapper-3">
        <a
          href="#services"
          onClick={() => handlePageChange('Services')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}
        >
          Services
        </a>
      </div>
      <div className="text-wrapper-4">
        <a
          href="#Testimonials"
          onClick={() => handlePageChange('Testimonials')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Testimonials' ? 'nav-link active' : 'nav-link'}
        >
          Testimonials
        </a>
      </div>
      <div className="text-wrapper-5">
        <a
          href="#contact"
          onClick={() => scrollToFooter('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </div>
    </div>
    
  );
}

