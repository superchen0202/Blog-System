import React, {useState, useEffect} from 'react';
import style from './Post.module.scss';
import { useParams } from 'react-router-dom';
import { loadPost } from '@/service/api';

export type PostProps = {
  id: number,
  title: string,
  body: string,
  createdAt: string,
};

const InitState: PostProps={
  id: 0,
  title: '',
  body: '',
  createdAt: '',
}

const Post: React.FC = () => {

  const { id } = useParams();
  const [post, setPost] = useState(InitState);

  useEffect(() => {

    if(id){
      loadPost(id).then((post) => setPost(post[0]))
    }
    return
  }, [id]);

  console.log(id);

  return (

    <div className={style.container}>
      
      <div className={style.header}>
        
        <div className={style.title}>
          { post && post.title}
        </div>
        
        <div className={style.date}>
          {
            post && new Date(post.createdAt).toLocaleString()
          }
        </div>

      </div>

      <div className={style.body}>
        { post && post.body}
      </div>
      
    </div>
  )
};

export default React.memo(Post);