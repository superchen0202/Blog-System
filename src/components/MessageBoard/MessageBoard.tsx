import React, { useState, useEffect } from 'react';
import style from './MessageBoard.module.scss';
import Message, { MessageProps } from '../Message/Message';
import { fetchComments } from '@/service/api';
import Loading from '../shared/Loading';

const MessageBoard: React.FC = (props) => {

  const [messageApiError, setMessageApiError] = useState<string>();
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
      fetchComments()
      .then((comments)=>{
        setMessages(comments);
        setIsLoading(false);
      })
      .catch((error)=>{
        setMessageApiError(error.message);
      })

  }, [])

  return (

    <div className={style.page}>

      <h1 className={style.title}>留言板</h1>
      
      {/* 留言表單 */}
      <form action="#" method='get' className={style["message-form"]}>
        
        <div>留言內容</div>
        
        <textarea rows={10} className={style["message-text-area"]}/>
        
        <button className={style["submit-button"]}>
          送出
        </button>
      </form>

      {/* 錯誤訊息 */}
      {
        messageApiError && (
          <div className={style["message-error"]}>
            { messageApiError }
          </div>
        )
      }
      
      {/* 留言內容 */}
      <div className={style["message-list"]}>
        {
          isLoading? <Loading/> : messages.map((message, index) => {

            const { author, createdAt, content} = message;

            return(
                    <Message key={index}
                             author = {author}
                             createdAt = {createdAt}
                             content = {content}
                     />
                  )
          })
        }
      </div>
      
    </div>
  )

};

export default React.memo(MessageBoard);