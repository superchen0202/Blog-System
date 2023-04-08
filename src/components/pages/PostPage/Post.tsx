import React from 'react';

//---Component---
const Post: React.FC<PostProps> = (props) => {

  return (
    <> 
      {/* show title & date*/}
      <div className="divide-line mt-10">

        {/* title */}
        <div className="text-4xl font-bold">
          { props.title }
        </div>

        {/* date */}
        <div className="grey-text mt-4 ">
          { new Date(props.createdAt).toLocaleString() }
        </div>
      </div>
      
      {/* show content */}
      <div className="divide-line text-lg leading-normal tracking-[3px]">
        { props.body}
      </div>
    </>
  )
};

export default Post;