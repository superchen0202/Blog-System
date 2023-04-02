import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '@/service/hooks';
import { getAuthToken, getCurrentUser } from '@/service/authService';
import NavBar from './NavBar';

const Home: React.FC = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    //if token exists in local storage, get user info from Redux state.
    if(getAuthToken()){
      dispatch(getCurrentUser());
    }
  }, [dispatch])
  
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