import React from 'react';
import style from './PostList.module.scss';
import { Link } from "react-router-dom";

// PostList: 顯示文章列表
const PostList: React.FC<PostProps> = (props) => {

  const { id, title, createdAt } = props;

  return (
    <div className={style.container}>
      
      <Link to={`/posts/${id}`} className={style.title}>
        { title }
      </Link>

      <div className={style.date}>
        {
          new Date(createdAt).toLocaleDateString()
        }
      </div>

    </div>
  )
};

export default React.memo(PostList);