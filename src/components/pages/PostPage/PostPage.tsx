import React, {useState, useEffect} from 'react';
import style from './PostPage.module.scss';
import { useParams } from 'react-router-dom';
import { loadPost } from '@/service/api';
import { PostListProps } from '../PostList';

type PostPageProps = PostListProps&{
  body: string
};

const InitState: PostPageProps={
  id: 687,
  title: '',
  body: '',
  createdAt: '',
}

const PostPage: React.FC = () => {

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

export default React.memo(PostPage);