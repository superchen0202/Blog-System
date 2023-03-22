import React, { useState, useEffect, useRef } from 'react';
import style from './MessageBoard.module.scss';
import { useAppDispatch, useAppSelector } from '@/service/hooks';
import { loadComments, sendComments } from '@/service/commentService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
import NavBar from '@/components/shared/NavBar';
import Message from '../Message';

// Container
const MessageBoard: React.FC = () => {
  
  const refTextAreaInput = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const [ message, setMessage ] = useState<string>('');
  const [ commentsValidation, setCommentsValidation] = useState<string>('');
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.authReducer.userInfo.username);
  const { 
    comments, 
    isLoading, 
    loadingError, 
    isSending, 
    sendingError
  } = useAppSelector((state) => state.commentReducer);
  
  // Mount did mount: loading comments from backend to display
  useEffect(() => {
    dispatch(loadComments());
  }, [dispatch]);

  const textAreaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setMessage(event.currentTarget.value);
    setCommentsValidation('');
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) =>{
    
    event.preventDefault();

    if(message == ''){
      setCommentsValidation('Invalid request, "content" is required!');
      refTextAreaInput.current.focus();
      return ;
    }
    
    dispatch(sendComments(message));
    setMessage('');
    dispatch(loadComments());
  }

  return (

    <div className={style.page}>

      <NavBar/>

      <h1 className={style.title}>留言板</h1>
      
      {/* 留言表單 */}
      <form action="/comments" method='post' className={style["message-form"]} onSubmit={formSubmitHandler} >
        
        <textarea rows={2}
                  className={style["message-text-area"]}
                  onChange={textAreaHandler}
                  placeholder="留言內容"
                  value={message}
                  ref={refTextAreaInput}
        />
        
        <button className={style["submit-button"]}>送出</button>
        
      </form>
 
      {/* ------------------------------------------------------------- */}
      
      {/* After Submit loading */}
      { isSending && <div className={style.loading}>Loading...</div> }

      {/* Submit Error */}
      { sendingError && <ErrorInfo message = {sendingError}/> }
      
      {/* ------------------------------------------------------------- */}

      {/* 留言載入錯誤訊息 */}
      { loadingError && <ErrorInfo message = {loadingError}/> }

      {/* 留言內容 */}
      <div className={style["message-list"]}>
      {
        isLoading? <DataIsLoading/>: 
        comments.map(message =><Message key={ message.id }{...message}/>)
      }
      </div>
 
    </div>
  )
};

export default React.memo(MessageBoard);