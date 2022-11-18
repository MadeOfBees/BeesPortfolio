import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import Proj1 from './pages/projects/Proj1';
import Proj2 from './pages/projects/Proj2';
import Proj3 from './pages/projects/Proj3';
import Proj4 from './pages/projects/Proj4';
import Proj5 from './pages/projects/Proj5';
import Proj6 from './pages/projects/Proj6';
import Proj7 from './pages/projects/Proj7';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Proj1') {
      return <Proj1 />;
    }
    if (currentPage === 'Proj2') {
      return <Proj2 />;
    }
    if (currentPage === 'Proj3') {
      return <Proj3 />;
    }
    if (currentPage === 'Proj4') {
      return <Proj4 />;
    }
    if (currentPage === 'Proj5') {
      return <Proj5 />;
    }
    if (currentPage === 'Proj6') {
      return <Proj6 />;
    }
    if (currentPage === 'Proj7') {
      return <Proj7 />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </main>
  );
}
