import React, {memo} from 'react';
import { useUpdateCommentMutation } from '@/service/commentService';
// import ShowRenderCount from '@/components/ShowRenderCount';

type Editable = {
  ChangeEditingMode: (event?: React.MouseEvent<HTMLButtonElement>) => void,
  id: number,
  content: string,
  editedComment: string,
  EditingComment: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  // ReLoadComments: () => void,
  prevComment: string,
  setPrevComment: React.Dispatch<React.SetStateAction<string>>,
};

const LightBox: React.FC<Editable> = (props) => {

  //---更新送出---
  const [ updateComment ] = useUpdateCommentMutation();
  const UpdateAndSubmitHandler = (event: React.MouseEvent<HTMLButtonElement>) =>{

    event.preventDefault();

    if( props.prevComment === props.editedComment){

      if(confirm(`內容無更新，確認離開頁面?`) === false){
        return
      }
      else{
        props.ChangeEditingMode();
        return
      }
    }
    else{
      updateComment({ id: props.id, content: props.editedComment})
      .unwrap()
      .then(()=> {
        alert("更新成功!");
        props.ChangeEditingMode();
        props.setPrevComment(props.editedComment);
        // props.ReLoadComments();
      });
    };
  };
  
  return (
    <div className="lightBox">
      <div className='container'>
        <div className="rounded mt-60 mx-auto text-lg">
          
          {/* ---變更輸入框--- */}
          <textarea rows={2} className="message-text-area" placeholder="留言內容"
                    value={ props.editedComment } onChange={ props.EditingComment }
          />

          {/* ---更新、取消--- */}
          <div className='flex items-center mr-auto'>
            <button onClick={ UpdateAndSubmitHandler} className='submit-btn mr-1 hover:cursor-pointer'>
              更新
            </button>
            <div className='grey-text mr-1'>|</div>          
            <button onClick={ props.ChangeEditingMode } className='submit-btn hover:cursor-pointer'>
              取消
            </button>
          </div>

        </div>
      </div>
    </div>
  )
};

export default memo(LightBox);