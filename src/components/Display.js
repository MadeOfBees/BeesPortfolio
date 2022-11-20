import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import Proj1 from './pages/projects/1SQLStore';
import Proj2 from './pages/projects/2PasswordGen';
import Proj3 from './pages/projects/3ReadMe';
import Proj4 from './pages/projects/4Weather';
import Proj5 from './pages/projects/5ArrayGun';
import Proj6 from './pages/projects/6Fibonacci';
import Proj7 from './pages/projects/7TeamMaker';
import Contact from './pages/Contact';
import Backrooms from './pages/Backrooms';
import "./css/style.css"

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
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Backrooms />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main className='setWidth'>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='bg-light page'>{renderPage()}</div>
    </main>
  );
}
