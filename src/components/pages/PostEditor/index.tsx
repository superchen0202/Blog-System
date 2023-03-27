import React, { useState, useRef, useEffect } from 'react';
import { useAppSelector } from '@/service/hooks';
import NavBar from '@/components/shared/NavBar';
import Container from '@/components/shared/Container';
import { sendNewPost } from '@/service/postService';
import NewPostSuccessInfo from '@/components/shared/utils';

// Container
const MessageBoard: React.FC = () => {

  const user = useAppSelector((state) => state.authReducer.userInfo);
  const [post, setPost] = useState({ title:"", content: ""});
  const [isValidate, setIsValidate] = useState({title: false, content: false});
  const [isShowSuccessInfo, setIsShowSuccessInfo] = useState(false);
  const refTitle = useRef() as React.MutableRefObject<HTMLInputElement>;
  const refContent = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  const formValidator = () =>{
    
    if(user.username === null){
      alert('please sign in!');
      return false;
    }    
    
    if(post.title === ""){
      setIsValidate({...isValidate, title: true});
      refTitle.current.focus();
      return false;
    }

    if(post.content === ""){
      setIsValidate({...isValidate, content: true});
      refContent.current.focus();
      return false;
    }
  }

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) =>{ 
    
    event.preventDefault();

    if(formValidator()){
      sendNewPost(user, post);
      setPost({title:"",content:""});
      setIsShowSuccessInfo(true); 
    }
  }

  const closeSuccessInfo = (event: React.MouseEvent<HTMLButtonElement>) =>{
    if (event.target !== event.currentTarget) {
      setIsShowSuccessInfo(false);
    }
  }

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setIsShowSuccessInfo(false);
      }, 5000);
    }
  }, [isShowSuccessInfo])
  
  return (
    <>
      <NavBar/>

      { 
        isShowSuccessInfo && 
        <NewPostSuccessInfo onCallParent={closeSuccessInfo} promptText={"發布成功!"} />
      }

      <Container>

        <form className="ml-5 sm:w-96 prose lg:prose-xl" onSubmit={formSubmitHandler}>

          <h2 className="text-3xl font-bold mt-5">發布文章</h2>
          
          {/* 文章標題 */}
          <label className="block mb-1">
            <input type="text" placeholder="文章標題"
                   className={`w-full rounded-md p-3 btn ${isValidate.title?"field-focus":""}`}
                   ref={refTitle}
                   value={post.title}
                   onChange = {(event: React.ChangeEvent<HTMLInputElement>)=>{
                     setPost({...post, title: event.currentTarget.value})
                     setIsValidate({...isValidate, title: false});
                   }}
            />
          </label>

          <div className={`${isValidate.title? "":"invisible"} text-red-500 text-sm height-[36px] mb-2`}>
            { "請輸入標題!" }
          </div>

          {/* 文章內容 */}
          <label className="block mt-1 mb-1">
            <textarea cols={30} rows={10} placeholder="文章內容"
                      className={`w-full rounded-md p-3 btn ${isValidate.content?"field-focus":""}`}
                      ref={refContent}
                      value={post.content}
                      onChange = {(event: React.ChangeEvent<HTMLTextAreaElement>)=>{
                        setPost({...post, content: event.currentTarget.value})
                        setIsValidate({...isValidate, content: false});
                      }}
            />
          </label>

          <div className={`${isValidate.content? "":"invisible"} text-red-500 text-sm height-[36px]  mb-2`}>
            { "請輸入內容!" }
          </div>

          <button className='post-btn'>發布</button>

        </form>
      </Container>
    </>
  )
};

export default React.memo(MessageBoard);