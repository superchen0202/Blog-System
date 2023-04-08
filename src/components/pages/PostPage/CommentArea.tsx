import React, { useRef } from 'react';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';

// component
type submitCommentParamsType = { 
  currentUser: User,
  postID: number,
  comment: string,
};

type CommentAreaInfo = {
  currentUser: User,
  postID?: number | string,
  comment: string,
  setComment: React.Dispatch<React.SetStateAction<string>>,
  SubmitComments:(params: submitCommentParamsType) => void,
  isSending: boolean,
};

const CommentArea: React.FC<CommentAreaInfo> = (props) => {
  
  const { currentUser, postID, SubmitComments, isSending, comment, setComment } = props;
  
  const refTextAreaInput = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) =>{
    
    event.preventDefault();

    if(currentUser === null){
      alert('please sign in!');
      return
    };
    if(comment === ''){
      alert('Invalid request, "content" is required!');
      refTextAreaInput.current.focus();
      return
    };
    if(postID && typeof postID ==='string'){
      SubmitComments( { currentUser, comment, postID: parseInt(postID) } );
    };
  };
  
  return (
    <div className='mb-10'>

      {/* -----留言表單-----*/}
      <form onSubmit={formSubmitHandler} className="mt-4 text-lg">
        
        <textarea rows={2} placeholder="留言內容" className="message-text-area"
                  value={comment} ref={refTextAreaInput} onChange={(event)=>setComment(event.currentTarget.value)}
        />
        
        <button className="submit-btn">送出</button>
      </form>

      {/* -----After Submit----- */}
      { isSending && <DataIsLoading/>}
    </div>
  );
};

export default React.memo(CommentArea);