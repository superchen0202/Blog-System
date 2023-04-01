import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import baseURL from './environment';
import axios from "axios";

// posts-related RTK query for basic CRUD usage .
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

      // unused TBD
      deletePost: builder.mutation<PostProps, PostProps>({          
        query: ( post ) => ({
          url: `/posts/${post.id}`,
          method: 'DELETE',
          body: post,
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

//--- post slice-reducer for fetch data only ---
export const loadPosts = createAsyncThunk("loadPosts",
  async(queryString: string, thunkAPI) => {
    try{
      const response = await axios.get(`${baseURL}/posts/${queryString}`);
      const posts = response.data as unknown as PostProps[];
      // console.log(posts);
      return posts; 
    }
    catch(err){
      const error = err as Error;
      const message = error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updatePost = createAsyncThunk("updatePost",
  async ({postID, title, body}: {postID: string | number, title: string, body: string}) => {
    try{
      const response = await axios.patch(`${baseURL}/posts/${postID}`,
      {
        title,
        body
      });
      console.log("postID: ",postID);
      console.log(response);
      return response.data;
    }
    catch(err){
      const error = err as Error;
      console.log(error);
      throw new Error(error.message);
    }
  }
);

const postSlice = createSlice({
  name: 'postSlice',
  initialState:{
    posts: [] as PostProps[],
    isLoading: false,
    loadingError: null as error,
  },
  reducers:{},
  extraReducers: (builder) =>{
    //load
    builder.addCase(loadPosts.pending, (state) => {
      state.isLoading = true;
      state.loadingError = null;
    });
    builder.addCase(loadPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      console.log(state.posts);
    });
    builder.addCase(loadPosts.rejected, (state, action)=>{
      if(action.error.message){
        state.loadingError = action.error.message;
      }
    });

    //update
    builder.addCase(updatePost.pending, (state) => {
      state.isLoading = true;
      state.loadingError = null;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(updatePost.rejected, (state, action)=>{
      if(action.error.message){
        state.loadingError = action.error.message;
      }
    });
  }
});

export const { reducer, actions } = postSlice;
export default reducer;