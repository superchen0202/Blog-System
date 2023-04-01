import React, { useEffect, lazy, Suspense } from 'react';
import { useLoadPostsQuery } from '@/service/potsService';
import { useAppSelector } from '@/service/hooks';
import { useNavigate } from 'react-router-dom';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
const PostList = lazy(() => import('@/components/shared/PostList'));

const MyPostList: React.FC = () => {

  const { username, id } = useAppSelector(state => state.authReducer.userInfo);
  const { data, isLoading, error } = useLoadPostsQuery(`userId=${id}`, { refetchOnMountOrArgChange: true });
  const navigate = useNavigate();

  useEffect(() => {

    if( isLoading === false && username === null){
      alert("Please sign in first!");
      navigate('/login');
    };
    
  }, [isLoading]);

  return (
    <>
      <h2 className='text-3xl font-bold my-5'>我的文章列表</h2>
      
      { error && <ErrorInfo/>}

      {/* Display Post Title */}
      <Suspense fallback={<DataIsLoading/>}>
        { data && data.map( post => <PostList key={post.id}{...post} pathName={`/${username}/posts/edit/${post.id}`} />) }
      </Suspense>
    </>
  )
};

export default React.memo(MyPostList);