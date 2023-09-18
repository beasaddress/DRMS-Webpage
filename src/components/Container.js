import React, { useState, useRef } from 'react';
import NavBar from './NavBar.js';
import About from './About.js';
import Testimonials from './Testimonials.js';
import Services from './Services.js';
import Home from './Home.js';
import Footer from './Footer.js';


export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const footerRef = useRef(null);
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Home') {
        return <Home />
    }
    if (currentPage === 'Services') {
      return <Services />;
    }
    if (currentPage === 'Contact') {
        return <Footer />;
    }
    return <Testimonials />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} scrollToFooter={scrollToFooter}/>
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer /> 
    </div>
  );
}