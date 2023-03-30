import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import style from './Container.module.scss';

const Home: React.FC = () => {
 
  return (
    <>
      <NavBar/>
      <div className={style.container}>
        <Outlet/>
      </div>
    </>
  )
};

export default Home;