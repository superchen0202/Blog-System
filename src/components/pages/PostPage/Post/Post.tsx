import React, {useState, useEffect} from 'react';
import style from './Post.module.scss';
import { useParams } from 'react-router-dom';
import { useGetPostsQuery } from '@/service/homeService';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
import MessageBoard from '../MessageBoard';

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

    <div>
      { isLoading && <DataIsLoading/>}
      { error && <ErrorInfo/> }
      { data &&
      <div>      
          <div className="divide-line">
            
            <div className="text-4xl font-bold">
              { post && post.title }
            </div>
            
            <div className="text-base mt-4 text-black/[0.4]">
              {
                post && new Date(post.createdAt).toLocaleString()
              }
            </div>

          </div>

          <div className="divide-line text-lg leading-normal tracking-[3px]">
            { post && post.body}
          </div>
          <MessageBoard/>
        </div>
      }
      
    </div>
  )
};

export default React.memo(Post);