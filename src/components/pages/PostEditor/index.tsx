import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { useAppSelector } from '@/service/hooks';
import { useSendNewPostMutation } from '@/service/potsService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
const SuccessInfoBar = lazy(() => import('@/components/shared/SuccessInfoBar'));
// import ShowRenderCount from '@/components/ShowRenderCount';

const PostEditor: React.FC = () => {

  const [ sendNewPost, result ] = useSendNewPostMutation();
  const userInfo = useAppSelector((state) => state.authReducer.userInfo);
  const [post, setPost] = useState({ title:"", content: ""});
  const [isValidate, setIsValidate] = useState({titleError: false, contentError: false});
  const [isShowSuccessInfo, setIsShowSuccessInfo] = useState(false);
  const refTitle = useRef() as React.MutableRefObject<HTMLInputElement>;
  const refContent = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  const formValidator = () =>{
    
    if(userInfo.username === null){
      alert('please sign in!');
      return false;
    }    
    
    if(post.title === ""){
      setIsValidate({...isValidate, titleError: true});
      refTitle.current.focus();
      return false;
    }

    if(post.content === ""){
      setIsValidate({...isValidate, contentError: true});
      refContent.current.focus();
      return false;
    }

    return true;
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) =>{ 
    
    event.preventDefault();

    if(formValidator()){
      sendNewPost({ userInfo, post });
      setPost({title:"",content:""});
      setIsShowSuccessInfo(true); 
    }
  };

  const clickCloseSuccessInfo = (event: React.MouseEvent<HTMLButtonElement>) =>{
    if (event.target !== event.currentTarget) {
      setIsShowSuccessInfo(false);
    }
  };

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setIsShowSuccessInfo(false);
      }, 5000);
    }
  }, [isShowSuccessInfo])
  
  return (
    <>
      { 
        isShowSuccessInfo && 
        <Suspense fallback={<DataIsLoading/>}>
          <SuccessInfoBar promptText={"發布成功!"}
                          onClickCloseBtn={clickCloseSuccessInfo}
          />
        </Suspense>
      }
      
      <form className="ml-5 sm:w-96 prose lg:prose-xl" onSubmit={formSubmitHandler}>
        
        {/* 標題 */}
        <h2 className="text-3xl font-bold mt-5">
          發布文章
        </h2>
        
        {/* 文章標題 */}
        <label className="block mb-1">
          <input type="text" placeholder="文章標題"
                  className={`w-full rounded-md p-3 btn ${isValidate.titleError?"field-warning":"focus-input"}`}
                  ref={refTitle}
                  value={post.title}
                  onChange = {(event: React.ChangeEvent<HTMLInputElement>)=>{
                    setPost({...post, title: event.currentTarget.value})
                    setIsValidate({...isValidate, titleError: false});
                  }}
          />
        </label>

        {/* 標題警語 */}
        <div className={`${isValidate.titleError? "":"invisible"} text-red-500 text-sm height-[36px] mb-2`}>
          { "請輸入標題!" }
        </div>

        {/* 文章內容 */}
        <label className="block mt-1 mb-1">
          <textarea cols={30} rows={10} placeholder="文章內容"
                    className={`w-full rounded-md p-3 btn ${isValidate.contentError?"field-warning":"focus-input"}`}
                    ref={refContent}
                    value={post.content}
                    onChange = {(event: React.ChangeEvent<HTMLTextAreaElement>)=>{
                      setPost({...post, content: event.currentTarget.value})
                      setIsValidate({...isValidate, contentError: false});
                    }}
          />
        </label>

        {/* 內容警語 */}
        <div className={`${isValidate.contentError? "":"invisible"} text-red-500 text-sm height-[36px]  mb-2`}>
          { "請輸入內容!" }
        </div>
        
        <button className='post-btn'>發布</button>

      </form>
    </>
  )
};

export default PostEditor;