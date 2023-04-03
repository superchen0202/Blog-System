import React from 'react';
import ShowRenderCount from '@/components/ShowRenderCount';

type Editable = CommentProps&{
  currentUser: User,
}

const Comment: React.FC<Editable> = (props) => {

  const { id, author, createdAt, content, userID, currentUser } = props;
  
  return (
  <>
    <div className="message-container">
      
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
        
        <div className="message-body mr-auto">{content}</div>
        
        {/* 編輯、刪除 */}
        {
          userID === currentUser.id &&
          <div className='flex justify-center items-center ml-auto'>
            <div className='grey-text mr-1 hover:cursor-pointer'>編輯</div>
            <div className='grey-text mr-1'>|</div>
            <div className='grey-text hover:cursor-pointer'>刪除</div>
          </div>          
        }
      </div>
      
    </div>
  </>
  )
};

export default React.memo(Comment);