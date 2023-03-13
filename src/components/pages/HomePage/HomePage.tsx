import React, {useState, useEffect} from 'react';
import style from './HomePage.module.scss';
import PostList, {PostListProps} from '../PostList';
import { loadPosts } from '@/service/api';
import NavBar from '@/components/shared/NavBar';
import { Outlet } from 'react-router-dom';

const HomePage: React.FC = () => {

  const [posts, setPosts] = useState<PostListProps[]>([]);

  useEffect(() => {
    loadPosts().then( posts => setPosts(posts));
  }, []);

  return (
    <div className={style.root}>

      <NavBar/>
      { posts.map( post => <PostList key={post.id}{...post} />)}
    </div>
  )
};

export default React.memo(HomePage);