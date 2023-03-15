import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type PostProps = {
    id: number,
    title: string,
    body: string,
    createdAt: string,
};

const baseURL = 'http://localhost:3000';
// const baseURL = 'https://student-json-api.lidemy.me';

// Define service using base URL and expected endpoints
export const homeApi = createApi({
    
    reducerPath: 'homeApi',

    baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
    
    endpoints: (builder) => ({
        
        getPosts: builder.query<PostProps[], number | 'all'>({
            
            query: (id) => {

                // /post/:id
                if(id !== 'all'){
                    console.log(id);
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