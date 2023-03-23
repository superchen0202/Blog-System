import React from 'react';

const Message: React.FC<CommentProps> = (props) => {

  const { id, author, createdAt, content } = props;
  
  return (
    <div className="p-4 rounded border-solid border-[1px] border-black/[0.125] mt-2">
      <div className="flex">
        <div className="mr-3 text-gray-900"> {author} </div>
        <div> 
          {
            new Date(createdAt).toLocaleString()
          }
        </div>
      </div>

      <div className="mt-2 break-all whitespace-pre-line">
        {content}
      </div>

    </div>
  )
};

export default React.memo(Message);