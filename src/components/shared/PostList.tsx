import React from 'react';
import { Link } from "react-router-dom";
import ShowRenderCount from '../ShowRenderCount';

type PostListProps = PostProps & {
  pathName: string,
  currentUser?: User,
  DeleteSelectedPost?: (id: number) => void,
} 

// Component, 顯示文章列表
const PostList: React.FC<PostListProps> = (props) => {

  const { pathName, id, title, body, createdAt, userId, currentUser, DeleteSelectedPost, ...rest } = props;

  const DeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    if(DeleteSelectedPost){
      DeleteSelectedPost(id);
    }
  };

  return (
    <div className="post-list-container">

      {/* 標題、日期 */}
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

      {/* 擷取部分文章內容、後臺顯示刪除UI及功能*/}
      <div className='flex justify-between mt-5'>
        
        <Link to={pathName} className='font-normal' >
          { body.slice(0,50) + "...查看更多"}
        </Link>
        
        {/* 後臺顯示刪除UI及功能 */}
        {
          userId === currentUser?.id &&
          <button onClick={DeleteHandler} className='text-base text-black/[0.4]'>
            刪除
          </button>
        }
      </div>

    </div>
  )
};

export default React.memo(PostList);