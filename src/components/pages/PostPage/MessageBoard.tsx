import React, { lazy, Suspense, useEffect, useState, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/service/hooks';
import { useLoadCommentsQuery } from '@/service/commentService';
import { useDeleteCommentMutation } from '@/service/commentService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
const Comment = lazy(() => import('./Comment'));
const CommentArea = lazy(() => import('./CommentArea'));

// -----Container-----
const MessageBoard: React.FC = () => {

  const postID = useParams().id;
  const currentUser = useAppSelector((state) => state.authReducer.userInfo);
  const { data: commentList, error: loadingError } = useLoadCommentsQuery(`postID=${postID}`);

  const refComment = useRef<Map<number, HTMLDivElement>>(new Map());
  const map = refComment.current;

  const [ isDeleted, setIsDeleted] = useState(false);
  const [ deletedIndex, setDeletedIndex ] = useState<number>(-1);

  const [ newComment, setNewComment] = useState<CommentProps[]>([]);
  const [ commentsCount, setCommentsCount ] = useState<number>(0); 

  // ref callback: commentID為 key，HTMLElement為value 存在 ref.current Map中
  const setRefComment = (commentID: number) => (node: HTMLDivElement) => {
    if(node) {
      map.set(commentID, node);
    }
    else{
      map.delete(commentID);
    }
  };

  const AddNewComment = useCallback((data: CommentProps) => {
    setNewComment( prev => {
      return prev.concat(data);
    });
  },[]);

  const IsDeleted = useCallback((commentID=-1) => {
    setDeletedIndex(commentID);
    setIsDeleted(prev => !prev);
  },[]);

  useEffect(() => {

    if(isDeleted && deletedIndex !== -1){    

      for (let [key, value] of map.entries()) {
        if (key === deletedIndex){
          value.remove();
          break;
        }
      }

      setIsDeleted(false);
    }

    if(commentList){
      setCommentsCount( prev => {
        return commentList.length + newComment.length
      });
    }

  }, [ commentList, newComment, isDeleted]);
  
  return (
    <div className='mb-10'>

      <h1 className="text-center mb-4">用戶回應({ commentsCount })</h1>
      
      {/* -----留言內容----- */}
      { loadingError && <ErrorInfo message = {"X_X"}/> }

      <Suspense fallback={<DataIsLoading/>}>
        { 
          commentList?.map(comment =>
            <div key={comment.id} ref={setRefComment(comment.id)} className="message-container">
              <Comment {...comment} currentUser={currentUser} IsDeleted={IsDeleted} />
            </div>
          ) 
        }
      </Suspense>

      { 
        newComment?.map(comment =>
          <div key={comment.id} ref={setRefComment(comment.id)} className="message-container">
            <Comment {...comment} currentUser={currentUser} IsDeleted={IsDeleted} />
          </div>
        ) 
      }
      
      {/* -----留言表單----- */}
      <CommentArea currentUser={currentUser} postID={postID} AddNewComment={AddNewComment} />  

    </div>
  );
};

export default MessageBoard;