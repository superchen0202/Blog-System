import React from 'react';
import { Link } from "react-router-dom";

// PostList: 顯示文章列表
const PostList: React.FC<PostProps> = (props) => {

  const { id, title, createdAt } = props;

  return (
    <div className="border-b-[1px] border-solid border-b-black/[0.3] p-4 flex justify-between items-center">
      
      <Link to={`/posts/${id}`} className="text-2xl no-underline text-gray-700">
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