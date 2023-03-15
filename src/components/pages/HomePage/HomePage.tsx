import React, {useState, useEffect} from 'react';
import style from './HomePage.module.scss';
import NavBar from '@/components/shared/NavBar';
import PostList from '../PostList';
import { PostProps, useGetPostsQuery } from '@/service/homeService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';

const HomePage: React.FC = () => {

  const [ posts, setPosts] = useState<PostProps[]>([]);
  const { data, isLoading, error } = useGetPostsQuery('all');

  useEffect(() => {

    if(data){
      setPosts(data);
    }

    console.log(error);

  }, [isLoading]);

  return (
    <div className={style.root}>
      
      <NavBar/>

      { isLoading && <DataIsLoading/>}

      {/* Display Post Title */}
      { data && posts.map( post => <PostList key={post.id}{...post} />) }
      { error && <ErrorInfo/>}
    </div>
  )
};

export default React.memo(HomePage);