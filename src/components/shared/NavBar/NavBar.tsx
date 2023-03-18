import React, { useEffect } from "react";
import style from './NavBar.module.scss';
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '@/slice/hooks';
import { getMe } from "@/slice/authSlice";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = (props) => {
  
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.authReducer.username);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch])

  return (
  
  <div className={style["header-container"]}>

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
        <NavLink to="/login" className={style.nav}>
        { user ? <p>{user}</p>:<p>登入</p>}  
        </NavLink>
    </ul>
    
  </div>
  )
};

export default React.memo(NavBar);