import React from 'react';
import { Link } from "react-router-dom";

// PostList: 顯示文章列表
const PostList: React.FC<PostProps> = (props) => {

  const { id, title, createdAt } = props;

  return (
    <div className="post-list-container">
      
      <Link to={`/posts/${id}`} className="post-list-title">
        { title }
      </Link>
      
      <div className="text-black/[0.8]">
        {
          new Date(createdAt).toLocaleDateString()
        }
      </div>

    </div>
  )
};

export default React.memo(PostList);