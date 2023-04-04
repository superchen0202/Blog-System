import React, { useState, useEffect, useRef } from 'react';
import { useUpdateCommentMutation, useDeleteCommentMutation } from '@/service/commentService';
// import ShowRenderCount from '@/components/ShowRenderCount';

type Editable = CommentProps&{
  currentUser: User,
  isEdited: boolean,
}

const Comment: React.FC<Editable> = (props) => {

  const { id, author, createdAt, content, userID, currentUser, isEdited } = props;
  const [ isEditingMode, setIsEditingMode ] = useState(false);
  const [ editedComment, setEditedComment] = useState(content);
  const [ isCommentEdited, setCommentIsEdited ] = useState(isEdited);
  const [ updateComment ] = useUpdateCommentMutation();
  const [ deleteComment ] = useDeleteCommentMutation();
  
  const EditingComment = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setEditedComment(event.currentTarget.value);
  };

  const DeleteComment = (event: React.FormEvent<HTMLButtonElement>) =>{

    event.preventDefault();

    if(confirm(`確認刪除?`) === false){
      return;
    }
    else{
      deleteComment(id)
      .unwrap()
      .then((data)=>{
        setCommentIsEdited(false);
        alert("已刪除!");
        setIsEditingMode(false);
      })
    }
  };

  const EditFinished = (event: React.FormEvent<HTMLButtonElement>) =>{

    event.preventDefault();

    /*
    if(content === editedComment){

      if(confirm(`內容無更新，確認離開頁面?`) === false){
        return
      }
      else{
        setIsEditingMode(false);
        return
      }
    }
    // */

    updateComment({ id, content: editedComment})
    .unwrap()
    .then((data)=> {
      setCommentIsEdited(true);
      setIsEditingMode(false);
      alert("更新成功!");
    });
  };

  const CancelEditing = (event: React.FormEvent<HTMLButtonElement>) =>{
    setEditedComment(content);
    setIsEditingMode(false);
  };
  
  return (
    <div className="message-container" data-check-edit={isCommentEdited}>

      {/* 用戶、時間 */}
      <div className="flex">

        {/* 留言用戶 */}
        <div className="message-author">
          {author}
        </div>

        {/* 留言時間 */}
        <div className='grey-text ml-auto'>
          { new Date(createdAt).toLocaleString() }
        </div>
      </div>

      {/* 留言內容 */}
      <div className="flex mt-2">
        
        <div className="message-body mr-auto">
          {/* {content} */}
          { editedComment }
        </div>
        
        {/* 編輯、刪除 */}
        {
          userID === currentUser.id &&
          <div className='flex justify-center items-center ml-auto'>
            <button className='grey-text mr-1 hover:cursor-pointer'
                    onClick={()=>{setIsEditingMode(true)}}>
              編輯
            </button>
            <div className='grey-text mr-1'>|</div>
            <button className='grey-text hover:cursor-pointer'
                    onClick={ DeleteComment }>
              刪除
            </button>
          </div>          
        }
      </div>

      { 
        isEditingMode && 
        <div className='lightBox'>
          <div className='container'>
            <div className="rounded mt-60 mx-auto text-lg">
            
              <textarea rows={2}
                        value={editedComment}
                        placeholder="留言內容"
                        className="message-text-area"
                        onChange={EditingComment}
              />
              
              <div className='flex items-center mr-auto'>
                
                <button className='submit-btn mr-1 hover:cursor-pointer'
                        onClick={ EditFinished }>
                  完成
                </button>
                
                <div className='grey-text mr-1'>|</div>
                
                <button className='submit-btn hover:cursor-pointer'
                        onClick={ CancelEditing }>
                  取消
                </button>
              </div>

            </div>
          </div>
        </div>
      }

    </div>
  )
};

export default React.memo(Comment);