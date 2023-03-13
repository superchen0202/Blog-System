import React, { useState, useEffect } from "react";
import style from './NavBar.module.scss';
import { Route, Link, NavLink, useLocation } from "react-router-dom";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = (props) => {
  
  const location = useLocation();
  // <Nav to="/" $active={location.pathname === "/"}></Nav>

  const ClickHandler = ()=>{
    // console.log(location)
  }

  return (
  
  <div className={style["header-container"]} onClick={ClickHandler}>

    <div className={style["left-navbar"]}>
      
      <h1 className={style.brand}>
        <NavLink to="/" className={style.nav}>
          React 部落格
        </NavLink>
      </h1>

      <ul className={style["navbar-list"]}>
        <NavLink to="/" className={style.nav}>首頁</NavLink>
        <NavLink to="/message-board" className={style.nav}>發布文章</NavLink>
      </ul>

    </div>

    <ul className={style["navbar-list"]}>
      <NavLink to="/login" className={style.nav}>登入</NavLink>
    </ul>
    
  </div>
  )
};

export default React.memo(NavBar);