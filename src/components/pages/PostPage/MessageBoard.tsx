import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/service/hooks';
import { loadComments, sendComments } from '@/service/commentService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
const Message = lazy(() => import('./Message'));

// Container
const MessageBoard: React.FC = () => {

  const messageID = useParams().id;
  const dispatch = useAppDispatch();
  const { username } = useAppSelector((state) => state.authReducer.userInfo);
  const { comments, isLoading, loadingError, isSending, sendingError } = useAppSelector((state) => state.commentReducer);
  const [ message, setMessage ] = useState<string>('');
  const refTextAreaInput = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  
  // Mount did mount: loading comments from backend to display
  useEffect(() => {
    if(messageID){
      dispatch(loadComments(messageID));
    }
  }, [dispatch]);

  const textAreaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setMessage(event.currentTarget.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) =>{
    
    event.preventDefault();
    
    if(username === null){
      alert('please sign in!');
      return ;
    }    
    
    if(message === ''){
      alert('Invalid request, "content" is required!');
      refTextAreaInput.current.focus();
      return ;
    }
    
    dispatch(sendComments({username, message}));
    setMessage('');
    // dispatch(loadComments());
  };

  return (
    <div className='mb-10'>

      <h1 className="text-center">用戶回應</h1>

      {/* --------------------載入留言-------------------- */}
      { loadingError && <ErrorInfo message = {loadingError}/> }

      {/* 留言內容 */}
      <div className="mt-4">
        <Suspense fallback={<DataIsLoading/>}>
          { comments.map(message =><Message key={ message.id }{...message}/>) }
        </Suspense>
      </div>
      
      {/* --------------------留言表單-------------------- */}
      <form onSubmit={formSubmitHandler} className="mt-4 text-lg">
        
        <textarea rows={2}
                  value={message}
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
      { sendingError && <ErrorInfo message = {sendingError}/> }

    </div>
  );
};

export default React.memo(MessageBoard);