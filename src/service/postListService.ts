import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseURL from './environment';
// import axios from "axios";

/*
export const loadPostLists = async (userID: string) => {
    try{
        const response = await axios.get(`${baseURL}/comments`);
        const comments = response.data as unknown as CommentProps[];
        const filterComments = comments.filter((comment)=> comment.postID === parseInt(userID));
        return filterComments; 
    }
    catch(err){
        const error = err as Error;
        throw new Error(error.message); 
    }
};
// */

// Define service using base URL and expected endpoints
export const homeApi = createApi({
    
    reducerPath: 'homeApi',

    baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
    
    endpoints: (builder) => ({
        
        getPosts: builder.query<PostProps[], number | string | 'all'>({
            
            query: (id) => {

                // /post/:id
                if(id !== 'all'){
                    return `/posts?id=${id}`;
                }
                
                // /posts`
                return `/posts?_sort=createdAt&_order=desc`;   
            }
        }),
    }),
})

// Export hooks for usage in FCs, are auto-generated based on defined endpoints
export const { useGetPostsQuery } = homeApi;