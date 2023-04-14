import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseURL from "./environment";

const commentsAPI = createApi({
    
  reducerPath: 'commentsAPI',

  baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
  endpoints: (builder) => ({  

    sendNewComment: builder.mutation<CommentProps, { currentUser: User, comment: string, postID: number }>({          
      query: ( { currentUser, comment, postID } ) => ({
        url: `/comments`,
        method: 'POST',
        body: {
          author: currentUser.username,
          content: comment,
          createdAt: Date.now(),
          postID,
          userID: currentUser.id
        },
      }),
    }),

    loadComments: builder.query<CommentProps[], number | string | 'all'>({
      query: (queryString) => {
          
        if(queryString !== 'all'){
          return `/comments?${queryString}`;
        }
        return `/comments?_sort=createdAt&_order=desc`;
      }
    }),
    
    updateComment: builder.mutation<CommentProps, { id: number, content: string }>({          
      query: ( { id, content } ) => ({
        url: `/comments/${id}`,
        method: 'PATCH',
        body: {
          content,
          updateAt: Date.now(),
        },
      }),
    }),

    deleteComment: builder.mutation<CommentProps, number>({          
      query: ( id ) => ({
        url: `/comments/${id}`,
        method: 'DELETE',
        // body: comment,
      }),
    }),
  }),
});

export const { 
  useSendNewCommentMutation,
  useLoadCommentsQuery,
  useUpdateCommentMutation,
  useDeleteCommentMutation
} = commentsAPI;

export default commentsAPI;