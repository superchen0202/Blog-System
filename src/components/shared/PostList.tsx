import React from 'react';
import { Link } from "react-router-dom";
import ShowRenderCount from '../ShowRenderCount';

type PostListProps = PostProps & {
  pathName: string,
} 

// PostList: 顯示文章列表
const PostList: React.FC<PostListProps> = (props) => {

  const { pathName, id, title, body, createdAt } = props;

  return (
    <div className="post-list-container">
      
      <Link to={pathName} className='post-list'>

        <div className='flex justify-between items-center'>
          
          <h2 className="post-list-title">
            { title.slice(0, 30)+"..." }
          </h2>

          <div className="grey-text">
            {
              new Date(createdAt).toLocaleDateString()
            }
          </div>

        </div>

        <div className='mt-5 font-normal'>
          { body.slice(0,50) + "...查看更多"}
        </div>
      </Link>

    </div>
  )
};

export default React.memo(PostList);