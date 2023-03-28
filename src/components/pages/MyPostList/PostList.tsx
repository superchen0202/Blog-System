import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from '@/service/hooks';

// PostList: 顯示文章列表
const PostList: React.FC<PostProps> = (props) => {

  const { id, title, body, createdAt } = props;
  const username = useAppSelector((state)=>state.authReducer.userInfo.username);

  return (
    <div className="post-list-container">
      
      <Link to={`/${username}/posts/edit/${id}`} className="post-list-title">
        { title }
      </Link>
      
      <div className="text-black/[0.8]  ml-auto">
        {
          new Date(createdAt).toLocaleDateString()
        }
      </div>
      
      {/* <Outlet/> */}
       
      {/* <div>
        { body.slice(0,75) + "..."}
      </div> */}


    </div>
  )
};

export default React.memo(PostList);