import React, { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/service/hooks';
import { loadComments, sendComments } from '@/service/commentService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
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
    // console.log(message);
    console.log(username);

    if(message == ''){
      alert('Invalid request, "content" is required!');
      // setCommentsValidation('Invalid request, "content" is required!');
      refTextAreaInput.current.focus();
      return ;
    }
    
    dispatch(sendComments({username, message}));
    setMessage('');
    // dispatch(loadComments());
  }

  return (

    <div className='mb-10'>

      <h1 className="text-center">用戶回應</h1>

       {/* ------------------------------------------------------------- */}

      {/* 留言載入錯誤訊息 */}
      { loadingError && <ErrorInfo message = {loadingError}/> }

      {/* 留言內容 */}
      <div className="mt-4">
      {
        isLoading? <DataIsLoading/>: 
        comments.map(message =><Message key={ message.id }{...message}/>)
      }
      </div>
      
      {/* 留言表單 */}
      <form action="/comments" method='post' className="mt-4 text-lg" onSubmit={formSubmitHandler} >
        
        <textarea rows={2}
                  className="block mt-2 w-full p-2 border border-solid border-black/[0.125]"
                  onChange={textAreaHandler}
                  placeholder="留言內容"
                  value={message}
                  ref={refTextAreaInput}
        />
        
        <button className="mt-2 bg-gray-800 rounded text-base text-gray-200 py-[6px] px-[12px] border-[1px] border-hidden">
          送出
        </button>
        
      </form>
 
      {/* ------------------------------------------------------------- */}
      
      {/* After Submit loading */}
      { 
      isSending && <div className="fixed top-0 left-0 right-0 bottom-0 text-white text-3xl flex items-center justify-center bg-black/[0.5]">
        Loading...
      </div>
      }

      {/* Submit Error */}
      { sendingError && <ErrorInfo message = {sendingError}/> }

    </div>
  )
};

export default React.memo(MessageBoard);