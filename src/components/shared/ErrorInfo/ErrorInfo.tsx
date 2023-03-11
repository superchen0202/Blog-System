import React from 'react';
import style from './ErrorInfo.module.scss';

type ErrorInfoProps = {
  message: string,
};

const ErrorInfo: React.FC<ErrorInfoProps> = (props) => {
  
  const { message } = props;

  return (
    <div className={style["message-error"]}>
      {message}
    </div>
  )
};

export default React.memo(ErrorInfo);