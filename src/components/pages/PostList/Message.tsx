import React from 'react';

const Message: React.FC<CommentProps> = (props) => {

  const { id, author, createdAt, content } = props;
  
  return (
    <div className="message-container">
      
      <div className="flex">
        <div className="message-author">
          {author}
        </div>
        <div>
          { new Date(createdAt).toLocaleString() }
        </div>
      </div>

      <div className="message-body">
        {content}
      </div>
    </div>
  )
};

export default React.memo(Message);