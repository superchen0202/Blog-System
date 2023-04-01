import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '@/service/hooks';
import { removeLocalStorage, removeCurrentUser } from "@/service/authService";
import ShowRenderCount from "@/components/ShowRenderCount";

const NavBar: React.FC = () => {
  
  const { username } = useAppSelector(state => state.authReducer.userInfo);  
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

  const pathMapping: PathMap[] = [
    {
      pageName: '文章列表',
      path: `/${username}/posts`,
    },
    {
      pageName: '發布文章',
      path: '/post-editor',
    },
  ];

  return (
    <header className="navbar-header">
      
      <ShowRenderCount/>

      <div className="navbar-container lg:max-w-[1024px] lg:mx-auto lg:px-0">
        
        {/* Left Side */}
        <div className="w-[100px] cursor-pointer">        
          <h1 className="m-0">
            <ShowRenderCount/>
            <Link to='/' className="navbar-item">新聞快報</Link>
          </h1>
        </div>

        {/* Right Side */}
        <ul className="flex items-center">
          {
            pathMapping.map((mapping, index)=>{
              const { pageName, path } = mapping;
              return (
                <li key = {index}>
                  <ShowRenderCount/>
                  <NavLink to = {path} className={ ({isActive}) => isActive? "navbar-item navbar-item-active":"navbar-item" }>
                    { pageName }
                  </NavLink>
                </li>
              )
            })
          }
          
          <li>
            { 
              username?
              <>
              <ShowRenderCount/> 
              <button className="navbar-item" onClick={logOut}>登出</button>
              </>: 
              <>
              <ShowRenderCount/>
              <NavLink to='/login' className={ ({isActive})=> isActive? "navbar-item navbar-item-active":"navbar-item"}>登入</NavLink>
              </>
            }
          </li>
          
          <li>
            <ShowRenderCount/>
            <p className="navbar-item">{username}</p>
          </li>

        </ul>
      </div>

    </header>
  )
};

export default React.memo(NavBar);