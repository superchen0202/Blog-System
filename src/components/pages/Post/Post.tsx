import React, {useState, useEffect} from 'react';
import style from './Post.module.scss';
import { useParams } from 'react-router-dom';
import { PostProps, useGetPostsQuery } from '@/service/homeService';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';

const InitState: PostProps = {
  id: 0,
  title: '',
  body: '',
  createdAt: '',
}

const Post: React.FC = () => {

  const { id } = useParams();
  const { data, isLoading, error } = useGetPostsQuery( id??skipToken);
  const [ post, setPost ] = useState(InitState);

  useEffect(() => {

    if(data){
      setPost(data[0]);
    }
  }, [isLoading]);

  return (

    <div className={style.container}>

      { isLoading && <DataIsLoading/>}
      { error && <ErrorInfo/> }
      { data && <div>      
          <div className={style.header}>
            
            <div className={style.title}>
              { post && post.title }
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
      }
      
    </div>
  )
};

export default React.memo(Post);