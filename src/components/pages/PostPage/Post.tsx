import React from 'react';
// import ShowRenderCount from '@/components/ShowRenderCount';

//---Component---
const Post: React.FC<PostProps> = (props) => {

  return (
    <> 
      {/* ---標題、日期--- */}
      <div className="divide-line mt-10">
        
        <div className="text-4xl font-bold">
          { props.title }
        </div>
        
        <div className="grey-text mt-4 ">
          { new Date(props.createdAt).toLocaleString() }
        </div>
      </div>
      
      {/* ---內容--- */}
      <div className="divide-line text-lg leading-normal tracking-[3px]">
        { props.body}
      </div>
    </>
  )
};

export default Post;