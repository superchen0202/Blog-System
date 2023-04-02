import React from 'react';
import ShowRenderCount from '@/components/ShowRenderCount';

const Message: React.FC<CommentProps> = (props) => {

  const { id, author, createdAt, content } = props;
  
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
      <div className="flex">
        
        <div className="message-body">{content}</div>
        
        {/* 編輯、刪除 */}
        <div className='flex justify-center ml-auto'>
          <div className='grey-text mr-1 hover:cursor-pointer'>編輯</div>
          <div className='grey-text mr-1'>|</div>
          <div className='grey-text hover:cursor-pointer'>刪除</div>
        </div>
        
      </div>
      
    </div>

    <div></div>

  </>
  )
};

export default React.memo(Message);