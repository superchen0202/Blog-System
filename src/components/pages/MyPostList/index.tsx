import React, { useEffect, lazy, Suspense, useCallback } from 'react';
import { useLoadPostsQuery } from '@/service/potsService';
import { useDeletePostMutation } from '@/service/potsService';
import { useAppSelector } from '@/service/hooks';
import { useNavigate } from 'react-router-dom';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
const PostList = lazy(() => import('@/components/shared/PostList'));

// 後台顯示文章列表
const MyPostList: React.FC = () => {

  const userInfo = useAppSelector(state => state.authReducer.userInfo);
  const { 
    data: postsList, 
    isLoading, 
    error, 
    refetch 
  } = useLoadPostsQuery(`userId=${userInfo.id}`);
  const navigate = useNavigate();
  const [ DeletePost ] = useDeletePostMutation();
  
  const DeleteSelectedPost = useCallback((id: number) => {
    if(confirm(`確認刪除?`) === false){
      return;
    }
    else{
      DeletePost(id)
      .unwrap()
      .then(()=>{
        alert("已刪除!");
        refetch();
      })
    }
  },[])

  useEffect(() => {

    if( isLoading === false && userInfo.username === null){
      alert("Please sign in first!");
      navigate('/login');
    };
  }, []);
  
  return (
    <>
      <h2 className='text-3xl font-bold my-5'>我的文章列表</h2>
      
      { error && <ErrorInfo/>}
      
      {/* 顯示文章列表後台 */}
      <Suspense fallback={<DataIsLoading/>}>
        { 
          postsList && postsList.map( post =>
                       <PostList key={post.id}{...post}
                                 pathName={`/${userInfo.username}/posts/edit/${post.id}`}
                                 currentUser={userInfo}
                                 DeleteSelectedPost={DeleteSelectedPost}
                        />)
        }
      </Suspense>
    </>
  )
};

export default React.memo(MyPostList);