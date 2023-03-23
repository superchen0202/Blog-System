import React from "react";
import style from './NavBar.module.scss';
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from '@/service/hooks';

const NavBar: React.FC = () => {
  
  const userinfo = useAppSelector(state => state.authReducer.userInfo);
  const { username, id } = userinfo;

  return (
    <header className="header">

      <div className="flex justify-between items-center
           h-[60px] px-2 box-border
           lg:max-w-[1024px] lg:mx-auto lg:px-0">
        
        {/* Left Side */}
        <div className="w-[100px] cursor-pointer">        
          <h1 className="m-0">
            <Link to="/" className={style.nav}>部落格</Link>
          </h1>
        </div>

        {/* Right Side */}
        <ul className="flex items-center">
          <NavLink to="/" className={style.nav}>首頁</NavLink>
          <NavLink to="/message-board" className={style.nav}>發布文章</NavLink>
          <NavLink to="/login" className={style.nav}>
            {  username ? <p>{ username }</p> : <p>登入</p> }   
          </NavLink>
        </ul>

      </div>

    </header>
  )
};

export default React.memo(NavBar);