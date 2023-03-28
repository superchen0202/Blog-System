import React, { useState, useEffect } from 'react';
import NavBar from '@/components/shared/NavBar';
import Container from '@/components/shared/Container';
import PostList from '../PostList';
import { useGetPostsQuery } from '@/service/postListService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
import NewPostSuccessInfo from '@/components/shared/utils';
import { useAppSelector, useAppDispatch } from '@/service/hooks';
import { showLoginSuccess } from '@/service/authService';

const Home: React.FC = () => {
  
  const dispatch = useAppDispatch();
  const [ posts, setPosts] = useState<PostProps[]>([]);
  const { data, isLoading, error } = useGetPostsQuery('all');
  const showFirstLoginSuccess = useAppSelector((state)=>state.authReducer.showFirstLoginSuccess);
  const username = useAppSelector((state)=>state.authReducer.userInfo.username);
  
  const closeSuccessInfo = (event: React.MouseEvent<HTMLButtonElement>) =>{
      if (event.target !== event.currentTarget) {
          dispatch(showLoginSuccess(false));
      }
  }

  useEffect(() => {

    if(data){
      setPosts(data);
    }

    if(showFirstLoginSuccess){
      setTimeout(() => {
        dispatch(showLoginSuccess(false));
      }, 3000);
    }
    
    return()=>{
    }

  }, [isLoading, showFirstLoginSuccess]);

  return (
    <div>

      <NavBar/>
      
      { 
        showFirstLoginSuccess && 
        <NewPostSuccessInfo onCallParent={closeSuccessInfo} promptText={`登入成功! 歡迎${username}!`} />
      }

      <Container>
        <div>
          <h2 className='text-3xl font-bold my-5'>最新文章</h2>
          
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