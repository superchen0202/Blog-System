import React from 'react';
import style from './PostPage.module.scss';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/shared/NavBar';

const PostPage: React.FC = () => {

  return (
    <div className={style.root}>
      <NavBar/>
      <Outlet/>    
    </div>
  )
};

export default React.memo(PostPage);