import React from 'react';
import { Link } from "react-router-dom";
import ShowRenderCount from '../ShowRenderCount';

type PostListProps = PostProps & {
  pathName: string,
  currentUser?: User,
  deleteFunc?: any
  // MutationTrigger<MutationDefinition<number, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, CommentProps, "commentsAPI">>
} 

// PostList: 顯示文章列表
const PostList: React.FC<PostListProps> = (props) => {

  const { pathName, id, title, body, createdAt, userId, currentUser, deleteFunc, ...rest } = props;


  const DeletePost = (event: React.MouseEvent<HTMLButtonElement>) =>{

    event.preventDefault();
    
    if(confirm(`確認刪除?`) === false){
      return;
    }
    else{
      console.log(id);
      deleteFunc(id)
      .unwrap()
      .then(()=>{
        // setCommentIsEdited(false);
        alert("已刪除!");
        //  setIsEditingMode(false);
      })
    }
  };



  return (
    <div className="post-list-container">
      
      <div className='post-list'>
        <div className='flex justify-between items-center'>
          
          <Link to={pathName}>
            <h2 className="post-list-title">
              { title.slice(0, 30)+"..." }
            </h2>
          </Link>

          <div className="grey-text">
            {
              new Date(createdAt).toLocaleDateString()
            }
          </div>

        </div>
      </div>

      <div className='flex justify-between mt-5'>
        
        <Link to={pathName} className='font-normal' >
          { body.slice(0,50) + "...查看更多"}
        </Link>
        
        {
          userId === currentUser?.id &&
          <button className='text-base text-black/[0.4]'
                  onClick={DeletePost}>
            刪除
          </button>
        }
      </div>
    </div>
  )
};

export default React.memo(PostList);