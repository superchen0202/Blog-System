import React from 'react';
import style from './BlogPost.module.scss';
import { Outlet, useParams } from 'react-router-dom';
import NavBar from '@/components/shared/NavBar';

type BlogPostProps = {};

const BlogPost: React.FC<BlogPostProps> = (props) => {
    
  // 指定參數值
  let { slug } = useParams();

  return (
    <div className={style.root}>
      
      {/* <NavBar/> */}
      
      <div>Now showing post {slug} </div>

      <Outlet/>    
    </div>
  )
};

export default React.memo(BlogPost);