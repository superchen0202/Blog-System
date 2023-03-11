import React from 'react';
import style from './Message.module.scss';

export type MessageProps = {
  id?: number,
  author?: string, 
  createdAt?: string, 
  content?: string,
};

// Component
const Message: React.FC<MessageProps> = (props) => {

  const { 
          id,
          author = "蘇柏丞",
          createdAt = "2023-10-25",
          content = "幹",
        } = props;

  return (

    <div className={style["message-container"]}>

      <div className={style["message-head"]}>
        <div className={style["message-author"]}> {author} </div>
        <div> {createdAt} </div>
      </div>

      <div className={style["message-body"]}>
        {content}
      </div>

    </div>
  )
};

export default React.memo(Message);