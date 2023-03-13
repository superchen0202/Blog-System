import React, { useState, useEffect, useRef } from 'react';
import style from './MessageBoard.module.scss';
import Message, { MessageProps } from '../Message';
import { loadComments, sendComments } from '@/service/api';
import DataIsLoading from '../DataIsLoading';
import ErrorInfo from '../ErrorInfo';
import NavBar from '../NavBar';

// Container
const MessageBoard: React.FC = (props) => {

  const refTextAreaInput = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  // load comments
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [LoadingError, setLoadingError] = useState<string>('');
  const [comments, setComments] = useState<MessageProps[]>([]);

  // send comments
  const [IsSendingComments, setIsSendingComments] = useState(false);
  const [sendingError, setSendingError] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Mount did mount: loading comments from backend to display
  useEffect(() => {

    loadComments()
    .then(comments => setComments(comments))
    .catch(error => setLoadingError(error.message))
    .finally(() => setIsLoadingComments(false));

  }, [isLoadingComments, IsSendingComments]);

  const textAreaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setMessage(event.currentTarget.value);
    setSendingError('');
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) =>{
    
    event.preventDefault();

    if(message == ''){
      setSendingError('Invalid request, "content" is required!');
      refTextAreaInput.current.focus();
      return ;
    }
    
    setIsSendingComments(true);
    
    sendComments(message)
    .then(response => setMessage(''))
    .catch(error => setSendingError(error.message))
    .finally(()=> setIsSendingComments(false));
  }

  return (

    <div className={style.page}>

      <NavBar/>

      <h1 className={style.title}>留言板</h1>
      
      {/* 留言表單 */}
      <form action="/comments"
            method='post'
            className={style["message-form"]}
            onSubmit={formSubmitHandler}
      >
        
        <textarea rows={10}
                  className={style["message-text-area"]}
                  onChange={textAreaHandler}
                  placeholder="留言內容"
                  value={message}
                  ref={refTextAreaInput}
        />
        
        <button className={style["submit-button"]}
                // onSubmit={formSubmitHandler}
        >
          送出
        </button>
        
      </form>
 
      {/* ------------------------------------------------------------- */}
      
      {/* After Submit loading */}
      { IsSendingComments && <div className={style.loading}>Loading...</div> }

      {/* Submit Error */}
      { sendingError && <ErrorInfo message = {sendingError}/> }
      
      {/* ------------------------------------------------------------- */}

      {/* 留言載入錯誤訊息 */}
      { LoadingError && <ErrorInfo message = {LoadingError}/> }

      {/* 留言內容 */}
      <div className={style["message-list"]}>
      {
        isLoadingComments? <DataIsLoading/>: 
        comments.map(message => <Message key={ message.id }{...message}/>)
      }
      </div>
 
    </div>
  )
};

export default React.memo(MessageBoard);