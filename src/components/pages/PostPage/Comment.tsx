import React, { lazy, useState, useEffect, useCallback, useRef, forwardRef } from 'react';
import { useDeleteCommentMutation } from '@/service/commentService';
// import ShowRenderCount from '@/components/ShowRenderCount';
const LightBox = lazy(() => import('./LightBox'));

type Editable = CommentProps&{
  currentUser: User,
  IsDeleted: (id: number) => void,
};

const Comment: React.FC<Editable> = (props) => {

  const { id, author, createdAt, content, userID, currentUser } = props;
  const [ isEditingMode, setIsEditingMode ] = useState(false);
  const [ beforeEditedComment, setBeforeEditedComment] = useState(content);
  const [ editedComment, setEditedComment] = useState(beforeEditedComment);

  // ---編輯、黑框(完成、取消)---
  const ChangeEditingMode = useCallback((event?: React.MouseEvent<HTMLButtonElement>) => {
    setIsEditingMode(prev => !prev);
  },[]);

  //---編輯模式輸入---
  const EditingComment = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedComment(event.currentTarget.value);
  },[]);

  //---刪除---
  const [ deleteComment ] = useDeleteCommentMutation();
  
  const DeleteSelectedComment = (event: React.FormEvent<HTMLButtonElement>) => {
    
    event.preventDefault();
    
    if(confirm(`確認刪除?`) === false){
      return;
    }
    else{
      deleteComment(id)
      .unwrap()
      .then(()=>{
        props.IsDeleted(id);
        alert("已刪除!");
      })
    }
  };

  // useEffect(() => {
  //   setEditedComment(beforeEditedComment);
  // }, [isEditingMode]);

  return (
    <>  
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
          { beforeEditedComment }
        </div>
        
        {/* 當留言為用戶所屬時，顯示編輯、刪除UI */}
        {
          userID === currentUser.id &&
          <div className='flex justify-center items-center ml-auto'>
            <button onClick={ ChangeEditingMode } className='grey-text mr-1 hover:cursor-pointer'>
              編輯
            </button>
            <div className='grey-text mr-1'>|</div>
            <button onClick={ DeleteSelectedComment } className='grey-text hover:cursor-pointer'>
              刪除
            </button>
          </div>          
        }
      </div>

      { 
        isEditingMode && 
        <LightBox ChangeEditingMode={ChangeEditingMode}
                  id={id} content={content} editedComment={editedComment}
                  EditingComment={EditingComment}
                  prevComment={beforeEditedComment}
                  setPrevComment={setBeforeEditedComment}
        /> 
      }
    </>
  )
}

export default React.memo(Comment);