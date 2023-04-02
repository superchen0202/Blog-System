import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoadPostsQuery } from '@/service/potsService';
import MessageBoard from './MessageBoard';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';
import ShowRenderCount from '@/components/ShowRenderCount';

const PostPage: React.FC = () => {

  const postParams = useParams().id;
  const { data, isLoading, error } = useLoadPostsQuery(`id=${postParams}`);

  return (
    <>
      { isLoading && <DataIsLoading/>}
      { error && <ErrorInfo/> }
      { 
        data &&
        <> 
          <ShowRenderCount />

          {/* show title & date*/}
          <div className="divide-line mt-10">

            {/* title */}
            <div className="text-4xl font-bold">
              { data[0] && data[0].title }
            </div>

            {/* date */}
            <div className="grey-text mt-4 ">
              { data[0] && new Date(data[0].createdAt).toLocaleString() }
            </div>
          </div>
          
          {/* show content */}
          <div className="divide-line text-lg leading-normal tracking-[3px]">
            { data[0] && data[0].body}
          </div>
          
          <MessageBoard/>
        </>
      }
      
    </>
  )
};

export default React.memo(PostPage);