import React, { useEffect } from "react";
import style from './NavBar.module.scss';
import { Link, NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '@/slice/hooks';
import { getMe } from "@/slice/authSlice";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = (props) => {
  
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.authReducer.username);

  useEffect(() => {
    dispatch(getMe());
    console.log(user);
  }, [dispatch])

  return (
    <header className="sticky top-0 bg-white border-b-[1px] border-gray-300">

      <div className="flex justify-between items-center
                      h-[60px] px-2 box-border
                      lg:max-w-[1024px] lg:mx-auto lg:px-0"
      >
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
            { user ? <p>{user}</p> : <p>登入</p> }   
          </NavLink>
        </ul>
      </div>
    </header>
  )
};

export default React.memo(NavBar);