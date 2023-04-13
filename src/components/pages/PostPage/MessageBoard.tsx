import React, { useState, useRef } from 'react';
import { useSendNewCommentMutation } from '@/service/commentService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';

type MessageBoardProps = {
  currentUser: User,
  postID: string | undefined,
  AddNewComment: (newComment: CommentProps) => void,
};

//-----留言表單-----
const MessageBoard: React.FC<MessageBoardProps> = (props) => {

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
    <>
      <form onSubmit={SubmitCommentHandler} className="mt-4 text-lg">
        
        <textarea rows={2}
                  placeholder="留言內容"
                  className="message-text-area"
                  ref={refCommentArea}
                  value={comment}
                  onChange={EditingCommentHandler}
        />

        <button type='submit' className="submit-btn">送出</button>
      </form>

      {/*-----After Submit------ */}
      { isSending && <DataIsLoading/>}
      { sendingError && <ErrorInfo message = {"X_X"}/> }
    </>
  );
};

export default MessageBoard;