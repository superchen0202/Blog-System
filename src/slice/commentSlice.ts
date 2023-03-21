import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = 'http://localhost:3000' //&& 'https://blog-server-rho.vercel.app';

export type Comment = {
  id: number,
  author: string,
  content: string,
  createdAt: number,
};

type error = string | null;

export const loadComments = createAsyncThunk("loadComments",
  async (_, thunkAPI) => {
    try{
      const response = await axios.get(`${baseURL}/comments`);
      // console.log(response);
      return response.data;    
    }
    catch(err){
      const error = err as Error;
      throw new Error(error.message); 
    }
  }
);

export const sendComments = createAsyncThunk("sendComments",
  async (content: string, thunkAPI) => {
    try{
      const response = await axios.post(`${baseURL}/comments`,
      {
        author: '小馬哥',
        content,
        createdAt: Date.now(),  //`${new Date().toISOString().split('T')[0]} ${new Date().toTimeString().split(' ')[0]}`,
      });
      return response.data;
    }
    catch(err){
      const error = err as Error;
      console.log(error);
      throw new Error(error.message);
    }
  }
);

const commentSlice = createSlice({

  name: 'commentSlice',
  initialState:{
    comments: [] as Comment[],
    isLoading: true,
    loadingError: null as error,
    isSending: false,
    sendingError: null as error,
  },
  reducers:{},
  extraReducers: (builder) =>{
    
    // load comments
    builder.addCase(loadComments.pending, (state) => {
      state.isLoading = true;
      state.loadingError = null;
    });
    builder.addCase(loadComments.fulfilled, (state, action) => {
      // state.comments.push(action.payload);
      state.comments = action.payload;
      state.isLoading = false;
    });
    builder.addCase(loadComments.rejected, (state, action)=>{
      state.isLoading = false;
      state.loadingError = action.payload as unknown as error;
    });

    //send comments
    builder.addCase(sendComments.pending, (state) => {
      state.isSending = true;
      state.loadingError = null;
    });
    builder.addCase(sendComments.fulfilled, (state, action) => {
      state.comments.push(action.payload);
      state.isSending = false;
    });
    builder.addCase(sendComments.rejected, (state, action)=>{
      state.isSending = false;
      state.loadingError = action.payload as unknown as error;
    });
  }
});

export const { reducer, actions } = commentSlice;
export default reducer;