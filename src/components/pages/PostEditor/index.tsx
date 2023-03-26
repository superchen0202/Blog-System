import React, { useState, useRef, useEffect } from 'react';
import { useAppSelector } from '@/service/hooks';
// import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
import NavBar from '@/components/shared/NavBar';
import Container from '@/components/shared/Container';
import { sendNewPost } from '@/service/postService';
import NewPostSuccessInfo from '@/components/shared/utils';

// Container
const MessageBoard: React.FC = () => {

  const user = useAppSelector((state) => state.authReducer.userInfo);
  const [post, setPost] = useState({ title:"", content: ""});
  const [showSuccessInfo, setShowSuccessInfo] = useState(false);
  const refTitle = useRef() as React.MutableRefObject<HTMLInputElement>;
  const refContent = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) =>{
    
    event.preventDefault();

    if(user === null){
      alert('please sign in!');
      return ;
    }    
    
    if(post.title === ""){
      alert('Invalid request, "content" is required!');
      refTitle.current.focus();
      return ;
    }

    if(post.content === ""){
      alert('Invalid request, "content" is required!');
      refContent.current.focus();
      return ;
    }

    sendNewPost(user, post);
    setPost({title:"",content:""});
    setShowSuccessInfo(true);
  }

  const closeSuccessInfo = (event: React.MouseEvent<HTMLButtonElement>) =>{
    if (event.target !== event.currentTarget) {
      setShowSuccessInfo(false);
    }
  }

  useEffect(() => {
    
    return () => {
      setTimeout(() => {
        setShowSuccessInfo(false);
      }, 5000);
    }
  }, [showSuccessInfo])
  
  return (
    <>
      <NavBar/>

      { showSuccessInfo && <NewPostSuccessInfo onCallParent={closeSuccessInfo}/> }

      <Container>

        <form className="ml-5 sm:w-96 prose lg:prose-xl" onSubmit={formSubmitHandler}>

          <h2 className="text-3xl font-bold mt-5">發布文章</h2>
          
          {/* 文章標題 */}
          <label className="block mb-3">
            <input type="text" className="w-full rounded-md p-3" placeholder="文章標題"
                   ref={refTitle}
                   value={post.title}
                   onChange = {(event: React.ChangeEvent<HTMLInputElement>)=>{
                     setPost({...post, title: event.currentTarget.value})
                   }}
            />
          </label>

          {/* 文章內容 */}
          <label className="block">
            <textarea cols={30} rows={10} className="w-full rounded-md p-3" placeholder="文章內容"
                      ref={refContent}
                      value={post.content}
                      onChange = {(event: React.ChangeEvent<HTMLTextAreaElement>)=>{
                        setPost({...post, content: event.currentTarget.value})
                      }}
            />
          </label>

          <button className='post-btn'>發布</button>

        </form>
      </Container>
    </>
  )
};

export default React.memo(MessageBoard);