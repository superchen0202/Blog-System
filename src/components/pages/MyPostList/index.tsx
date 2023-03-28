import React, { useState, useEffect } from 'react';
import NavBar from '@/components/shared/NavBar';
import Container from '@/components/shared/Container';
import PostList from '../PostList';
import { useGetPostsQuery } from '@/service/postListService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
import { useAppSelector, useAppDispatch } from '@/service/hooks';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {

  const { username, id } = useAppSelector(state => state.authReducer.userInfo);
  const navigate = useNavigate();
  
  const [ posts, setPosts] = useState<PostProps[]>([]);
  const { data, isLoading, error } = useGetPostsQuery('all');

  useEffect(() => {
    
    if( isLoading === false && username===null){
      alert("Please sign in first!");
      navigate('/login');
    }

    if(data){
      setPosts(data.filter((post)=> post.userId === id ));
    }

  }, [isLoading]);

  return (
    <div>
      <NavBar/>
      
      <Container>
        <div>
          <h2 className='text-3xl font-bold my-5'>我的文章列表</h2>
          
          { isLoading && <DataIsLoading/>}
          { error && <ErrorInfo/>}

          {/* Display Post Title */}
          { data && posts.map( post => <PostList key={post.id}{...post} />) }
        </div>
      </Container>
    </div>
  )
};

export default React.memo(Home);