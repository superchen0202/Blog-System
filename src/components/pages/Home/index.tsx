import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Home: React.FC = () => {
  
  return (
    <>
      <NavBar/>
      <div className="container">
        <Outlet/>
      </div>
    </>
  )
};

export default Home;