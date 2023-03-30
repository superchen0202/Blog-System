import React from 'react';

const Message: React.FC<CommentProps> = (props) => {

  const { id, author, createdAt, content } = props;
  
  return (
    <div className="message-container">

      {/* 用戶、時間 */}
      <div className="flex">

        {/* 留言用戶 */}
        <div className="message-author">
          {author}
        </div>

        {/* 留言時間 */}
        <div>
          { new Date(createdAt).toLocaleString() }
        </div>
      </div>

      {/* 留言內容 */}
      <div className="message-body">
        {content}
      </div>
    </div>
  )
};

export default React.memo(Message);