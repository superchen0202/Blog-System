import React, { useState, useRef } from 'react';
import { useSendNewCommentMutation } from '@/service/commentService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';

type CommentAreaInfo = {
  currentUser: User,
  postID: string | undefined,
  AddNewComment: (newComment: CommentProps) => void,
};

const CommentArea: React.FC<CommentAreaInfo> = (props) => {

  const { currentUser, postID, AddNewComment } = props;
  const [ sendComments, { isLoading: isSending, error: sendingError }] = useSendNewCommentMutation();

  const refCommentArea = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const [ comment, setComment ] = useState<string>(''); 

  const EditingCommentHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.currentTarget.value);
  };
  
  const SubmitCommentHandler = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    if(currentUser === null){
      alert('請先登入!');
      return ;
    }; 
    
    if(comment === ''){
      alert('請輸入內容!');
      refCommentArea.current.focus();
      return ;
    };
    
    if(postID){
      sendComments({ currentUser, comment, postID: parseInt(postID) })
      .unwrap()
      .then((response)=>{  
        AddNewComment(response);
        setComment('');
      })
    };
  };

  return (
    <div className='mb-10'>

      {/* -----留言表單-----*/}
      <form onSubmit={SubmitCommentHandler} className="mt-4 text-lg">
        
        <textarea rows={2} className="message-text-area" placeholder="留言內容"
                  value={comment} onChange={EditingCommentHandler} ref={refCommentArea}
        />

        <button className="submit-btn">送出</button>
      </form>
 
      {/*-----After Submit------ */}
      { isSending && <DataIsLoading/>}
      {/* { sendingError && <ErrorInfo message = {"X_X"}/> } */}
    </div>
  );
};

export default React.memo(CommentArea);