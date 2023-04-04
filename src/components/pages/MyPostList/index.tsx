import React, { useEffect, lazy, Suspense } from 'react';
import { useLoadPostsQuery } from '@/service/potsService';
import { useDeletePostMutation } from '@/service/potsService';
import { useAppSelector } from '@/service/hooks';
import { useNavigate } from 'react-router-dom';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
const PostList = lazy(() => import('@/components/shared/PostList'));

const MyPostList: React.FC = () => {

  const userInfo = useAppSelector(state => state.authReducer.userInfo);
  const { data, isLoading, error } = useLoadPostsQuery(`userId=${userInfo.id}`, { refetchOnMountOrArgChange: true });
  const navigate = useNavigate();
  const [ DeletePost ] = useDeletePostMutation();
  const deleteSelectedPost = (id: number) =>{
    DeletePost(id);
  }
  
  useEffect(() => {

    if( isLoading === false && userInfo.username === null){
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
        { 
          data && data.map( post =>
          <PostList key={post.id}{...post}
                    pathName={`/${userInfo.username}/posts/edit/${post.id}`}
                    currentUser={userInfo}
                    deleteFunc={DeletePost}
          />)
        }
      </Suspense>
    </>
  )
};

export default React.memo(MyPostList);