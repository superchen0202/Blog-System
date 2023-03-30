import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseURL from './environment';
import axios from "axios";

// 調整
export const sendNewPost = async (user: User, {title, content}: {title: string, content: string}) => {
  try{
    const response = await axios.post(`${baseURL}/posts`,{
      title,
      body: content,
      createdAt: Date.now(),
      author: user.username,
      userID: user.id,
    });
    return response.data;
  }
  catch(err){
    const error = err as Error;
    console.log(error);
    throw new Error(error.message);
  }
};


// Define service using base URL and expected endpoints
export const postsApi = createApi({
    
    reducerPath: 'postsApi',

    baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
    
    endpoints: (builder) => ({  
        getPosts: builder.query<PostProps[], number | string | 'all'>({
            query: (queryString) => {
                
                if(queryString !== 'all'){
                    return `/posts?${queryString}`;
                }

                return `/posts?_sort=createdAt&_order=desc`;
            }
        }),

        updatePost: builder.mutation<PostProps, { ID: number | string, title: string, body: string}>({
            
            query: ( post ) => ({
                url: `/posts/${post.ID}`,
                method: 'PATCH',
                body: {
                    title: post.title,
                    body: post.body,
                },
            }),
        }),
    }),
})

// Export hooks for usage in FCs, are auto-generated based on defined endpoints
export const { useGetPostsQuery, useUpdatePostMutation } = postsApi;