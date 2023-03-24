import React from "react";
import style from './NavBar.module.scss';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '@/service/hooks';
import { removeCurrentUser } from "@/service/authService";
import { removeLocalStorage } from "@/service/utils";

const NavBar: React.FC = () => {
  
  const { userInfo, isLoading} = useAppSelector(state => state.authReducer);  
  const { username, id } = userInfo;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = (event: React.FormEvent<HTMLButtonElement>) =>{

    event.preventDefault();

    if(confirm(`${username}確認登出?`) === false){
      return;
    }
    
    removeLocalStorage();
    dispatch(removeCurrentUser());
    navigate('/login');
  }

  return (
    <header className="header">

      <div className="flex justify-between items-center h-[60px] px-2 box-border
                      lg:max-w-[1024px] lg:mx-auto lg:px-0">
        
        {/* Left Side */}
        <div className="w-[100px] cursor-pointer">        
          <h1 className="m-0">
            <Link to="/" className={style.nav}>首頁</Link>
          </h1>
        </div>

        {/* Right Side */}
        <ul className="flex items-center">
          <li>
            <NavLink to="/" className={style.nav}>文章列表</NavLink>
          </li>
          
          <li>
            <NavLink to="/message-board" className={style.nav}>發布文章</NavLink>
          </li>

          <li>
            { !username && <NavLink to="/login" className={style.nav}>登入</NavLink> }
          </li>
  
          <li>
            { username && <button className={style.nav} onClick={logOut}>登出</button> }
          </li>
          
          <li>
            <p className={style.nav}>{username}</p>
          </li>

        </ul>
      </div>

    </header>
  )
};

export default React.memo(NavBar);