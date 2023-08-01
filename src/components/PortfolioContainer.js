import React, { useState } from 'react';
import Header from './Header/Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const mainContainer = {
    minHeight: '100vh', /* Set the minimum height of the container to the full viewport height */
    display: 'flex',
    flexDirection: 'column'
  }

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={mainContainer}>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer/>
    </div>
  );
}
