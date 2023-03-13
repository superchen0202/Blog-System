import React from 'react';
import style from './PostList.module.scss';
import { Link } from "react-router-dom";
import PostPage from '../PostPage';

export type PostListProps = {
  id: number,
  title: string,
  createdAt: string,
};

// PostList: 顯示文章列表
const PostList: React.FC<PostListProps> = (props) => {

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