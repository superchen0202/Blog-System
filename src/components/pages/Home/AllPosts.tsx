import React, { useEffect, lazy, Suspense } from 'react';
import { useLoadPostsQuery } from '@/service/potsService';
import { useAppSelector, useAppDispatch } from '@/service/hooks';
import { showLoginSuccess } from '@/service/authService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
const SuccessInfoBar = lazy(() => import('@/components/shared/SuccessInfoBar'));
const PostList = lazy(() => import('@/components/shared/PostList'));

// Container
const AllPosts: React.FC = () => {
  
  const { 
    data: postsList, 
    isLoading, 
    error 
  } = useLoadPostsQuery('all', { refetchOnMountOrArgChange: true });
  const { userInfo, isLoginSuccess } = useAppSelector((state)=>state.authReducer);
  const dispatch = useAppDispatch();

  const clickCloseSuccessInfo = (event: React.MouseEvent<HTMLButtonElement>) =>{
    if (event.target !== event.currentTarget) {
      dispatch(showLoginSuccess(false));
    }
  };

  useEffect(() => {
    
    let closeInfo: NodeJS.Timeout;

    if(isLoginSuccess){
      closeInfo = setTimeout(() => {
        dispatch(showLoginSuccess(false));
      }, 3000);
    }
    
    return () =>{
      clearInterval(closeInfo);
    };

  }, [isLoginSuccess]);

  return (
    <>
      { isLoginSuccess && <SuccessInfoBar promptText={`登入成功! 歡迎${userInfo.username}!`} onClickCloseBtn={clickCloseSuccessInfo}/>}
      
      <h2 className='text-3xl font-bold my-5'>最新文章</h2>

      {/* 顯示文章列表 */}
      <Suspense fallback={<DataIsLoading/>}>
        { postsList && postsList.map( post => <PostList key={post.id}{...post} pathName={`/posts/${post.id}`}/>)}
      </Suspense>
      
      { error && <ErrorInfo/>}
    </>
  )
};

export default AllPosts;