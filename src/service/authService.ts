import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthToken, setAuthToken } from "@/service/utils";
import axios from "axios";
import baseURL from "./enviroment";

export const login = async (userInfo: loginInfo) => {
  try{
      const response = await axios.post(`${baseURL}/login`, userInfo);
      // console.log(response);

      // 若 ok 為 0 代表錯誤
      if(response.data.ok === 0){
          return response.data;
      }

      // 成功就把 token 存到 localStorage
      setAuthToken(response.data.token);
      return response.data;
  }
  catch(err){
      const error = err as Error;
      console.log(error);
      throw new Error(error.message);
  }
};

export const getCurrentUser = createAsyncThunk("getCurrentUser",
  async(_, thunkAPI) => {
    try{
      // 從 localStorage 取得 token
      const token = getAuthToken();

      const response = await axios.get(`${baseURL}/me`, {
        headers: {
          authorization: `Bearer ${token}`,
        }
      });

      const userInfo = response.data.data;
      const { id, username }  = userInfo;
      return { id, username };
    }
    catch(err){
      const error = err as Error;
      const message = error.toString();
      return thunkAPI.rejectWithValue(message);
      // console.log(error);
      // throw new Error(error.message);
    }
  }
);

const userInfo: User = {
  id: 0,
  username: "",
};

const authSlice = createSlice({

  name: 'authSlice',
  initialState:{
    userInfo: userInfo,
    isLoading: false,
    loadingError: null as error,
  },

  reducers:{},

  extraReducers: (builder) =>{
    /*
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.loadingError = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.isLoading = false;
    });

    builder.addCase(login.rejected, (state, action)=>{
      state.loadingError = action.payload as unknown as string;
      state.isLoading = false;
    });
    // */

    //get user info by token in local storage
    builder.addCase(getCurrentUser.pending, (state) => {
      state.isLoading = true;
      state.loadingError = null;
    });

    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.userInfo.id = action.payload.id;
      state.userInfo.username = action.payload.username;
      state.isLoading = false;
    });

    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.loadingError = action.payload as unknown as string;
      state.isLoading = false;
    });
  }
});

export const { reducer, actions } = authSlice;
export default reducer;