import React, { useState, useRef, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/service/hooks';
import { useLoadCommentsQuery, useSendNewCommentMutation } from '@/service/commentService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
import ShowRenderCount from '@/components/ShowRenderCount';
const Comment = lazy(() => import('./Comment'));

// Container
const MessageBoard: React.FC = () => {

  const postID = useParams().id;
  const currentUser = useAppSelector((state) => state.authReducer.userInfo);
  const { data: commentsList, isLoading: commentsIsLoading, error: loadingError, refetch: loadCommentAgain } = useLoadCommentsQuery(`postID=${postID}`, { refetchOnMountOrArgChange: true});
  const [ sendComments, { isLoading: isSending, error: sendingError }] = useSendNewCommentMutation();
  const [ comment, setComment ] = useState<string>('');
  const refTextAreaInput = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const [ CommentIsEdited, setCommentIsEdited] = useState(false);
    
  const textAreaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setComment(event.currentTarget.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) =>{
    
    event.preventDefault();
    
    if(currentUser === null){
      alert('please sign in!');
      return ;
    }    
    
    if(comment === ''){
      alert('Invalid request, "content" is required!');
      refTextAreaInput.current.focus();
      return ;
    }
    
    if(postID){  
      sendComments({ currentUser, comment, postID: parseInt(postID) })
      .unwrap()
      .then(()=>{ 
        loadCommentAgain();
        setComment('');
      })
    }
  };
  
  return (
    <div className='mb-10'>

      <h1 className="text-center">用戶回應({ commentsList?.length })</h1>
      
      {/* --------------------載入留言-------------------- */}
      { loadingError && <ErrorInfo message = {"X_X"}/> }

      {/* 留言內容 */}
      <div className="mt-4">
        <Suspense fallback={<DataIsLoading/>}>
          { 
            commentsList?.map(comment =>
            <Comment key={comment.id }{...comment}
                     currentUser={currentUser}
                     isEdited={CommentIsEdited}
            />) 
          }
        </Suspense>
      </div>
      
      {/* --------------------留言表單-------------------- */}
      <form onSubmit={formSubmitHandler} className="mt-4 text-lg">
        
        <textarea rows={2}
                  value={comment}
                  placeholder="留言內容"
                  ref={refTextAreaInput}
                  className="message-text-area"
                  onChange={textAreaHandler}
        />
        
        <button className="submit-btn">
          送出
        </button>
        
      </form>
 
      {/* --------------------After Submit-------------------- */}
      { isSending && <DataIsLoading/>}
      { sendingError && <ErrorInfo message = {"X_X"}/> }

    </div>
  );
};

export default React.memo(MessageBoard);