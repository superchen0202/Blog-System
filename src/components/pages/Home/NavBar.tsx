import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '@/service/hooks';
import { removeLocalStorage, removeCurrentUser } from "@/service/authService";
import NavBarItem from "./NavBarItem";
import { DataIsLoading } from "@/components/shared/LoadingAndErrorInfo";

// view as Container temporarily
const NavBar: React.FC = () => {
  
  const { userInfo, isLoading } = useAppSelector(state => state.authReducer);  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = (event: React.FormEvent<HTMLButtonElement>) =>{

    event.preventDefault();

    if(confirm(`${userInfo.username}確認登出?`) === false){
      return;
    }
    
    removeLocalStorage();
    dispatch(removeCurrentUser());
    navigate('/login');
  };

  const pathMapping: PathMap[] = [
    {
      pageName: '新聞快報',
      path: `/`,
    },
    {
      pageName: '文章列表',
      path: `/${userInfo.username}/posts`,
    },
    {
      pageName: '發布文章',
      path: '/post-editor',
    },
  ];

  return (
    <header className="navbar-header">

      <div className="navbar-container lg:max-w-[1024px] lg:mx-auto lg:px-0">
        
        {/* Left Side */}
        <div className="w-[100px] cursor-pointer">        
          <h1 className="m-0">
            <Link to='/' className="navbar-item">新聞快報</Link>
          </h1>
        </div>

        {/* Right Side */}
        <ul className="flex items-center">
          {
            pathMapping.map((navBarItem, index) => <NavBarItem key={index}{...navBarItem}/>)
          }
          {
            isLoading? <DataIsLoading/>: <>
            {
              userInfo.username && <li>
                <button className="navbar-item" onClick={logOut}>登出</button>
              </li>
            }
            {
              !userInfo.username && <li>
                <NavLink to='/login' className={ ({isActive})=> isActive? "navbar-item navbar-item-active":"navbar-item"}>
                  登入
                </NavLink>
              </li> 
            }
            {
              userInfo.username && <li>
                <p className="navbar-item">{ userInfo.username }</p>
              </li>
            }
            </>
          }
        </ul>
      </div>

    </header>
  )
};

export default NavBar;