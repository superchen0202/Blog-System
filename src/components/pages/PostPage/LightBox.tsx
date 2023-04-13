import React, {memo} from 'react';
import { useUpdateCommentMutation } from '@/service/commentService';

type Editable = {
  commentID: number,
  commentState: [{ beforeUpdate: string; afterUpdate: string }, React.Dispatch<React.SetStateAction<{ beforeUpdate: string; afterUpdate: string }>>],
  ChangeEditingMode: (event?: React.MouseEvent<HTMLButtonElement>) => void,
};

const LightBox: React.FC<Editable> = (props) => {

  const { commentState, ...rest } = props;
  const [ comment, setComment] = commentState;

  //---編輯模式輸入---
  const EditingComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment({
      ...comment, 
      afterUpdate: event.currentTarget.value
    })
  };

  //---更新送出---
  const [ updateComment ] = useUpdateCommentMutation();
  const UpdateAndSubmitHandler = (event: React.MouseEvent<HTMLButtonElement>) =>{

    event.preventDefault();

    if( comment.beforeUpdate === comment.afterUpdate){

      if(confirm(`內容無更新，確認離開頁面?`) === false){
        return
      }
      else{
        props.ChangeEditingMode();
        return
      }
    }
    else{
      updateComment({ id: props.commentID, content: comment.afterUpdate})
      .unwrap()
      .then(()=> {
        alert("更新成功!");
        props.ChangeEditingMode();
        setComment({ ...comment, beforeUpdate: comment.afterUpdate});
      });
    };
  };
  
  return (
    <div className="lightBox">

      <div className='container'>
        
        <div className="rounded mt-60 mx-auto text-lg">
          {/* ---變更輸入框--- */}
          <textarea rows={2}
                    placeholder="留言內容"
                    className="message-text-area"
                    value={ comment.afterUpdate }
                    onChange={ EditingComment }
          />

          {/* ---更新、取消--- */}
          <div className='flex items-center mr-auto'>
            <button className='submit-btn mr-1 hover:cursor-pointer'
                    onClick={ UpdateAndSubmitHandler} 
            > 更新
            </button>
            <div className='grey-text mr-1'>|</div>          
            <button className='submit-btn hover:cursor-pointer'
                    onClick={ props.ChangeEditingMode } 
            > 取消
            </button>
          </div>
        </div>

      </div>
      
    </div>
  )
};

export default memo(LightBox);