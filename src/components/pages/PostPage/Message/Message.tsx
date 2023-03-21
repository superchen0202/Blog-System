import React from 'react';
import style from './Message.module.scss';
import { Comment } from '@/slice/commentSlice';

// Component
const Message: React.FC<Comment> = (props) => {

  const { 
          id,
          author,
          createdAt,
          content,
        } = props;

  return (

    <div className={style["message-container"]}>

      <div className={style["message-head"]}>
        <div className={style["message-author"]}> {author} </div>
        <div> 
          {
            new Date(createdAt).toLocaleString()
          }
        </div>
      </div>

      <div className={style["message-body"]}>
        {content}
      </div>

    </div>
  )
};

export default React.memo(Message);