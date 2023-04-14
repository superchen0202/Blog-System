import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseURL from './environment';

export const postsAPI = createApi({
    
    reducerPath: 'postsAPI',

    baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
    
    endpoints: (builder) => ({  

      sendNewPost: builder.mutation<PostProps, { userInfo: User, post: { title: string, content: string}}>({          
        query: ( { userInfo, post } ) => ({
          url: `/posts`,
          method: 'POST',
          body: {
            title: post.title,
            body: post.content,
            createdAt: Date.now(),
            author: userInfo.username,
            userID: userInfo.id,
          },
        }),
      }),

      loadPosts: builder.query<PostProps[], number | string | 'all'>({
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

      deletePost: builder.mutation<PostProps, number | string>({          
        query: ( postID ) => ({
          url: `/posts/${postID}`,
          method: 'DELETE',
          // body: post,
        }),
      }),
    }),
});

export const { 
  useSendNewPostMutation,
  useLoadPostsQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsAPI;

export default postsAPI;