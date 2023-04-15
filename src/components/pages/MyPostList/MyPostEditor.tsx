import React, { useState, useRef, useEffect } from 'react';
import { useLoadPostsQuery, useUpdatePostMutation } from '@/service/potsService';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/service/hooks';
import { useNavigate } from 'react-router-dom';
import SuccessInfoBar from '@/components/shared/SuccessInfoBar';
import ShowRenderCount from '@/components/ShowRenderCount';

// Container
const MyPostEditor: React.FC = () => {

  const userInfo = useAppSelector(state => state.authReducer.userInfo);
  const postID = useParams().id;
  const { 
    data: selectedPost, 
    isLoading: isLoadingPost,
  } = useLoadPostsQuery(`id=${postID}`, { refetchOnMountOrArgChange: true });
  const [ editingPost, setEditingPost ] = useState({title:"", body:""});
  const [ validateResult, setValidateResult ] = useState({isTitleError: false, isContentError: false});
  const [ updatePost ] = useUpdatePostMutation();
  const refTitle = useRef() as React.MutableRefObject<HTMLInputElement>;
  const refContent = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const [ isShowSuccessInfo, setIsShowSuccessInfo ] = useState(false);
  const navigate = useNavigate();

  const editingTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingPost({...editingPost, title: event.currentTarget.value })
    setValidateResult({...validateResult, isTitleError: false});
  };

  const editingBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditingPost({...editingPost, body: event.currentTarget.value})
    setValidateResult({...validateResult, isContentError: false});
  };

  const formValidator = () =>{

    if(editingPost.title === ""){
      setValidateResult({...validateResult, isTitleError: true});
      refTitle.current.focus();
      return false;
    }

    if(editingPost.body === ""){
      setValidateResult({...validateResult, isContentError: true});
      refContent.current.focus();
      return false;
    }

    return true;
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) =>{ 
    
    event.preventDefault();

    if(formValidator() && editingPost !== undefined && postID !== undefined){
      updatePost({ ID: postID , title: editingPost.title, body: editingPost.body})
      .unwrap()
      .then(()=>{      
        setIsShowSuccessInfo(true); 
      })
    }
  };

  const closeSuccessInfo = (event: React.MouseEvent<HTMLButtonElement>) =>{
    if (event.target !== event.currentTarget) {
      setIsShowSuccessInfo(false);
    }
  };

  useEffect(() => {

    if(selectedPost && selectedPost[0] !== undefined){
      
      if(userInfo.id !== selectedPost[0].userId){
        alert('Woops! it seems something get wrong! X_X');
        navigate(`/${userInfo.username}/posts`);
      };

      if(editingPost.title === "" || editingPost.body === ""){
        setEditingPost(selectedPost[0]);
      };
    };

    if(isShowSuccessInfo){
      setTimeout(() => {
        setIsShowSuccessInfo(false);
      }, 3000);
    };

  }, [isLoadingPost, isShowSuccessInfo])
  
  return (
    <>   
      { isShowSuccessInfo && <SuccessInfoBar onClickCloseBtn={closeSuccessInfo} promptText={"更新成功!"} />}

      <form onSubmit={formSubmitHandler} className="ml-5 sm:w-96 prose lg:prose-xl">
        
        {/* 標題 */}
        <h2 className="text-3xl font-bold mt-5">
          變更文章
        </h2>
        
        {/* 文章標題 */}
        <label className="block mb-1">
          <input type="text" placeholder="文章標題"
                 className={`w-full rounded-md p-3 btn ${validateResult.isTitleError?"field-warning":"focus-input"}`}
                 ref={refTitle}
                 value={editingPost.title}
                 onChange ={editingTitle}
          />
        </label>

        {/* 標題警語 */}
        <div className={`${validateResult.isTitleError? "":"invisible"} text-red-500 text-sm height-[36px] mb-2`}>
          { "請輸入標題!" }
        </div>
        
        {/* 文章內容 */}
        <label className="block mt-1 mb-1">
          <textarea cols={30} rows={10}
                    placeholder = "文章內容"
                    className = {`w-full rounded-md p-3 btn ${validateResult.isContentError?"field-warning":"focus-input"}`}
                    ref = { refContent }
                    value = { editingPost.body }
                    onChange = { editingBody }
          />
        </label>

        {/* 內容警語 */}
        <div className={`${validateResult.isContentError? "":"invisible"} text-red-500 text-sm height-[36px] mb-2`}>
          { "請輸入內容!" }
        </div>

        {/* 更新按鈕 */}
        <button className='post-btn'>
          更新
        </button>

      </form>
    </>
  )
};

export default React.memo(MyPostEditor);