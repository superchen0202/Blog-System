import React from 'react';
import { Link } from "react-router-dom";

type PostListProps = PostProps & {
  pathName: string,
} 

// PostList: 顯示文章列表
const PostList: React.FC<PostListProps> = (props) => {

  const { pathName, id, title, body, createdAt } = props;

  return (
    <div className="post-list-container">
      
      <Link to={pathName} className="post-list-title">
        { title }
      </Link>
      
      <div className="text-black/[0.8]  ml-auto">
        {
          new Date(createdAt).toLocaleDateString()
        }
      </div>
      
      {/* <div>
        { body.slice(0,75) + "..."}
      </div> */}
      
    </div>
  )
};

export default React.memo(PostList);