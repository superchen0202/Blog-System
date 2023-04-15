import React, { lazy, useState, useCallback } from 'react';
import { useDeleteCommentMutation } from '@/service/commentService';
const LightBox = lazy(() => import('./LightBox'));

type Editable = CommentProps &{
  currentUser: User,
  DeleteSelectedComment: (id: number) => void,
};

//---除了留言內容本身為純UI外，當留言為登入用戶所屬時含編輯及刪除等功能---
const Comment: React.FC<Editable> = (props) => {

  const [ isEditingMode, setIsEditingMode ] = useState(false);
  const commentToBeEditedState = useState({
    beforeUpdate: props.content,
    afterUpdate: props.content
  });
  const [ comment, setComment] = commentToBeEditedState;
  
  // ---編輯鈕進入黑框模式、黑框模式(完成、取消)---
  const ChangeEditingMode = useCallback((event?: React.MouseEvent<HTMLButtonElement>) => {
    setIsEditingMode(prev => !prev);
  },[]);

  //---刪除---
  const [ deleteComment ] = useDeleteCommentMutation();
  const DeleteSelectedComment = (event: React.FormEvent<HTMLButtonElement>) => {
    
    event.preventDefault();
    
    if(confirm(`確認刪除?`) === false){
      return;
    }
    else{
      deleteComment(props.id)
      .unwrap()
      .then(()=>{
        props.DeleteSelectedComment(props.id);
        alert("已刪除!");
      })
    }
  };

  return (
    <div className="message-container">
      
      {/* 留言用戶、留言時間 */}
      <div className="flex">
        <div className="message-author">
          { props.author }
        </div>
        <div className='grey-text ml-auto'>
          { new Date( props.createdAt ).toLocaleString() }
        </div>
      </div>

      {/* 留言內容 */}
      <div className="flex mt-2">
        
        <div className="message-body mr-auto">
          { comment.beforeUpdate }
        </div>
        
        { /* 當留言為用戶所屬時，顯示編輯、刪除UI */
          props.userID === props.currentUser.id &&
          <div className='flex justify-center items-center ml-auto'>
            
            <button className='grey-text mr-1 hover:cursor-pointer'
                    onClick={ ChangeEditingMode }
            > 編輯
            </button>
            
            <div className='grey-text mr-1'>|</div>
            
            <button className='grey-text hover:cursor-pointer'
                    onClick={ DeleteSelectedComment }
            > 刪除
            </button>
          </div>          
        }
      </div>

      { /* 進入留言編輯模式時，跳黑窗進行編輯 */
        isEditingMode && 
        <LightBox commentID={ props.id }
                  ChangeEditingMode={ChangeEditingMode}
                  commentState={commentToBeEditedState}
        /> 
      }
    </div>
  )
}

export default React.memo(Comment);