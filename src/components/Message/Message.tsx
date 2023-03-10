import React from 'react';
import style from './Message.module.scss';

type MessageProps = {
  author?: string, 
  time?: string, 
  children?: string,
};

const Message: React.FC<MessageProps> = (props) => {

  const { author, time, children } = props;

  return (

    <div className={style["message-container"]}>

    <div className={style["message-head"]}>
      <div className={style["message-author"]}> {author} </div>
      <div> {time} </div>
    </div>

    <div className={style["message-body"]}>
      {children}
    </div>

  </div>
  )
};

export default React.memo(Message);