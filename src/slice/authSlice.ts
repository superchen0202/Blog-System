import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@/service/api";
import { setMessage } from "./message";
import { getAuthToken } from "@/service/utils";
import axios from "axios";

const baseURL = 'https://blog-server-rho.vercel.app' //&& 'http://localhost:3000';

export type loginInfo = {
  username: string,
  password: string,
};

type error = string | null;
type User = {
  id: number,
  username: string,
  email?: string,
}
const userInfo: User = {
  id: 0,
  username: "",
};

export const login = createAsyncThunk("login",
  async(user: loginInfo, thunkAPI) => {
    try{
      const token = await AuthService.login(user);
      const { id, username } = await AuthService.getCurrentUser().then(response => response.data);
      return { id, username };
    }
    catch(err){   
      const error = err as Error;
      const message = error.toString();

      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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

      const userInfo = response.data.data
      const { id, username } = userInfo;
      return { id, username };
    }
    catch(err){   
      const error = err as Error;
      const message = error.toString();
      console.log(error);
      thunkAPI.dispatch(setMessage(message));
      // throw new Error(error.message); 
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  
    name: 'authSlice',
    initialState:{
      userInfo: userInfo,
      isLoading: false,
      loadingError: null as error,
    },
    
    reducers:{},
    
    extraReducers: (builder) =>{

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