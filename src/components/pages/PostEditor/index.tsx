import React, { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/service/hooks';
import { loadComments, sendComments } from '@/service/commentService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
import NavBar from '@/components/shared/NavBar';
import Container from '@/components/shared/Container';

// Container
const MessageBoard: React.FC = () => {

  // 文章標題 - 文章內容 - 送出
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.authReducer.userInfo.username);
  const { comments, isLoading, loadingError, isSending, sendingError } = useAppSelector((state) => state.commentReducer);

  const [ message, setMessage ] = useState<string>('');
  const refTextAreaInput = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  
  // Mount did mount: loading comments from backend to display
  useEffect(() => {
    dispatch(loadComments());
  }, [dispatch]);

  const textAreaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setMessage(event.currentTarget.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) =>{
    
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
  }

  return (
    <>
      <NavBar/>

      <Container>

        <form className="ml-5 sm:w-96 prose lg:prose-xl">

          <h2 className="mt-5">發布文章</h2>
          
          <label className="block mb-3">
              <input type="text" className="w-full rounded-md p-3" placeholder="文章標題" />
          </label>

          <label className="block">
              <textarea cols={30} rows={10} className="w-full rounded-md p-3" placeholder="文章內容"/>
          </label>

          <button className='post-btn'>發布</button>

        </form>

      </Container>
    </>
  )
};

export default React.memo(MessageBoard);