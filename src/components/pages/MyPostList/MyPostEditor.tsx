import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/service/hooks';
import Container from '@/components/shared/Container';
import { updatePost } from '@/service/postService';
import NewPostSuccessInfo from '@/components/shared/utils';
import { useGetPostsQuery } from '@/service/postListService';
import NavBar from '@/components/shared/NavBar';

// Container
const MyPostEditor: React.FC = () => {

  const postParams = useParams();
  const { data, isLoading, error } = useGetPostsQuery(postParams.id);

  const user = useAppSelector((state) => state.authReducer.userInfo);
  const [post, setPost] = useState({title:"", body:""});
  const [isValidate, setIsValidate] = useState({titleError: false, contentError: false});
  const [isShowSuccessInfo, setIsShowSuccessInfo] = useState(false);
  const refTitle = useRef() as React.MutableRefObject<HTMLInputElement>;
  const refContent = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  const formValidator = () =>{

    if(post === undefined){
      return false;
    }
    
    if(post.title === ""){
      setIsValidate({...isValidate, titleError: true});
      refTitle.current.focus();
      return false;
    }

    if(post.body === ""){
      setIsValidate({...isValidate, contentError: true});
      refContent.current.focus();
      return false;
    }

    return true;
  }

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) =>{ 
    
    event.preventDefault();

    if(formValidator() && post !== undefined){
      updatePost( postParams.id as unknown as number, post);
      setPost({title:"", body:""});
      setIsShowSuccessInfo(true); 
    }
  }

  const closeSuccessInfo = (event: React.MouseEvent<HTMLButtonElement>) =>{
    if (event.target !== event.currentTarget) {
      setIsShowSuccessInfo(false);
    }
  }

  useEffect(() => {

    if(data){
      setPost(data[0]);
    }

    return () => {
      setTimeout(() => {
        setIsShowSuccessInfo(false);
      }, 5000);
    }
  }, [isLoading, isShowSuccessInfo])
  
  return (
    <> 
      <Container>
      <div>        
        { 
          isShowSuccessInfo && 
          <NewPostSuccessInfo onCallParent={closeSuccessInfo} promptText={"更新成功!"} />
        }

        <form className="ml-5 sm:w-96 prose lg:prose-xl" onSubmit={formSubmitHandler}>

          <h2 className="text-3xl font-bold mt-5">變更文章</h2>
          
          {/* 文章標題 */}
          <label className="block mb-1">
            <input type="text" placeholder="文章標題"
                   className={`w-full rounded-md p-3 btn ${isValidate.titleError?"field-warning":"focus-input"}`}
                   ref={refTitle}
                   value={post?.title}
                   onChange = {(event: React.ChangeEvent<HTMLInputElement>)=>{
                      if(post){
                        setPost({...post, title: event.currentTarget.value })
                        setIsValidate({...isValidate, titleError: false});
                      }
                   }}
            />
          </label>

          <div className={`${isValidate.titleError? "":"invisible"} text-red-500 text-sm height-[36px] mb-2`}>
            { "請輸入標題!" }
          </div>

          {/* 文章內容 */}
          <label className="block mt-1 mb-1">
            <textarea cols={30} rows={10} placeholder="文章內容"
                      className={`w-full rounded-md p-3 btn ${isValidate.contentError?"field-warning":"focus-input"}`}
                      ref={refContent}
                      value={post?.body}
                      onChange = {(event: React.ChangeEvent<HTMLTextAreaElement>)=>{
                        if(post){
                          setPost({...post, body: event.currentTarget.value})
                          setIsValidate({...isValidate, contentError: false});
                        }
                      }}
            />
          </label>

          <div className={`${isValidate.contentError? "":"invisible"} text-red-500 text-sm height-[36px]  mb-2`}>
            { "請輸入內容!" }
          </div>

          <button className='post-btn'>更新</button>

        </form>
        
      </div>
      </Container>
    </>
  )
};

export default React.memo(MyPostEditor);