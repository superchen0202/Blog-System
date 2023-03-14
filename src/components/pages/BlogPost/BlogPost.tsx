import React from 'react';
import style from './BlogPost.module.scss';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/shared/NavBar';

type BlogPostProps = {};

const BlogPost: React.FC<BlogPostProps> = (props) => {

  return (
    <div className={style.root}>
      <NavBar/>
      <Outlet/>    
    </div>
  )
};

export default React.memo(BlogPost);