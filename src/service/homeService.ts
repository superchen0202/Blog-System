import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseURL from './enviroment';

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