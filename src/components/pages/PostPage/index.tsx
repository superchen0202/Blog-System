import React,{ lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useLoadPostsQuery } from '@/service/potsService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
const Post = lazy(() => import('./Post'));
const MessageBoard = lazy(() => import('./MessageBoard'));

//---Container---
const PostPage: React.FC = () => {

  const postID = useParams().id;
  const { data: selectedPost, error } = useLoadPostsQuery(`id=${postID}`);
  
  return (
    <>
      {/* -----顯示文章內容----- */}
      <Suspense fallback={<DataIsLoading/>}>
        { selectedPost?.map( post => <Post key={post.id}{...post} />) }
      </Suspense>
      
      { error && <ErrorInfo/> }

      {/* -----留言區、留言內容----- */}
      <Suspense fallback={<DataIsLoading/>}>
        <MessageBoard />
      </Suspense>
    </>
  )
};

export default PostPage;