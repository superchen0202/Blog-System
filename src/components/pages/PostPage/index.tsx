import React,{ lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useLoadPostsQuery } from '@/service/potsService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
const Post = lazy(() => import('./Post'));
const CommentArea = lazy(() => import('./CommentArea'));

//---Container---
const PostPage: React.FC = () => {

  const postID = useParams().id;
  const { 
    data: selectedPost, 
    error: PostLoadError,
  } = useLoadPostsQuery(`id=${postID}`, {refetchOnMountOrArgChange: true});
  
  return (
    <>
      {/* -----顯示文章內容----- */}
      <Suspense fallback={<DataIsLoading/>}>
        { selectedPost?.map( post => <Post key={post.id}{...post} />) }
      </Suspense>
      
      { PostLoadError && <ErrorInfo/> }

      {/* -----留言內容、留言區----- */}
      <Suspense fallback={<DataIsLoading/>}>
        <div className='mb-10'>
          <CommentArea />
        </div>
      </Suspense>
    </>
  )
};

export default PostPage;