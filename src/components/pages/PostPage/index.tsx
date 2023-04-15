import React, { lazy, Suspense, useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/service/hooks';
import { useLoadPostsQuery } from '@/service/potsService';
import { useLoadCommentsQuery } from '@/service/commentService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
const Post = lazy(() => import('./Post'));
const Comment = lazy(() => import('./Comment'));
const MessageBoard = lazy(() => import('./MessageBoard'));

//---Container---
const PostPage: React.FC = () => {

  const postID = useParams().id;
  const currentUser = useAppSelector((state) => state.authReducer.userInfo);
  const { 
    data: selectedPost, 
    error: PostLoadError,
  } = useLoadPostsQuery(`id=${postID}`, {refetchOnMountOrArgChange: true});
  const { 
    data, 
    error: loadingError 
  } = useLoadCommentsQuery(`postID=${postID}`, {refetchOnMountOrArgChange: true});
  const [ commentList, setCommentList ] = useState<CommentProps[]>([]);

  const AddNewComment = useCallback((comment: CommentProps) => {
    setCommentList( prev => {
      return prev.concat(comment);
    });
  },[]);

  const DeleteSelectedComment = useCallback((commentID=-1) => {
    setCommentList( prev => {
      return prev
      .slice(0, prev.findIndex(comment => comment.id === commentID))
      .concat(prev.slice(prev.findIndex(comment => comment.id === commentID)+1, prev.length));
    });
  },[]);

  useEffect(() => {
    
    if(data){
      setCommentList( prev => {
        return prev.concat(data);
      });
    }

    return () =>{
      setCommentList( prev => {
        return prev = [];
      });
    }

  }, [data]);

  return (
    <>
      {/* -----顯示文章內容----- */}
      <Suspense fallback={<DataIsLoading/>}>
        { selectedPost?.map( post => <Post key={post.id}{...post} />) }
      </Suspense>
      
      { PostLoadError && <ErrorInfo/> }

      {/* -----留言內容、留言區----- */}
      <div className='mb-10'>

        <h1 className="text-center mb-4">用戶回應({ commentList.length }) </h1>
    
        {/* -----留言內容----- */}
        { loadingError && <ErrorInfo message = {"X_X"}/> }

        <Suspense fallback={<DataIsLoading/>}>
          { 
            commentList.map(comment =>
              <Comment key={comment.id}{...comment}
                       currentUser={currentUser}
                       DeleteSelectedComment={DeleteSelectedComment}
              />
            ) 
          }
        </Suspense>
    
        {/* -----留言表單----- */}
        <div className='mb-10'>
          <MessageBoard postID={postID}
                        currentUser={currentUser}
                        AddNewComment={AddNewComment}
          />  
        </div>

      </div>
    </>
  )
};

export default PostPage;