import React from 'react';
import style from './MessageBoard.module.scss';
import Message from '../Message/Message';

type MessageBoardProps = {};

const MessageBoard: React.FC<MessageBoardProps> = (props) => {
  
  return (

    <div className={style.page}>

      <h1 className={style.title}>留言板</h1>
      
      <form action="#" method='get' className={style["message-form"]}>
        <div>留言內容</div>
        
        <textarea rows={10} className={style["message-text-area"]}/>
        
        <button className={style["submit-button"]}>
          送出
        </button>
      </form>

      <div className={style["message-list"]}>
        <Message/>
      </div>

    </div>
  )
};

export default React.memo(MessageBoard);