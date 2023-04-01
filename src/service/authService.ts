import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "./environment";

const TOKEN_NAME = "token";

// 將 token 存到 localStorage
const setAuthToken = (token: string) => {
  localStorage.setItem(TOKEN_NAME, token);
};

// 從 localStorage 讀取 token
const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

// 從 localStorage 移除 token
const removeLocalStorage = () => {
  return localStorage.removeItem(TOKEN_NAME);
};

export const login = async (userInfo: LoginInfo) => {
  try{
    const response = await axios.post(`${baseURL}/login`, userInfo);
    const JWTResponse = response.data as unknown as { ok: number, token: string};
    const { ok, token } = JWTResponse;

    // 若 ok 為 0 代表錯誤
    if(ok === 0){
      return response.data;
    };
    
    // 成功就把 token 存到 localStorage
    setAuthToken(token);
    return JWTResponse;
  }
  catch(err){
    const error = err as Error;
    // console.log(error.message);
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
      
      const userInfo = response.data.data as unknown as User;
      return userInfo;
    }
    catch(err){
      const error = err as Error;
      const message = error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userInfo: User = {
  id: null,
  username: null,
};

const authSlice = createSlice({

  name: 'authSlice',
  initialState:{
    userInfo,
    isLoading: false,
    errorMessage: null as error,
    isLoginSuccess: false,
  },

  reducers:{
    showLoginSuccess: (state, action: PayloadAction<boolean>)=>{
      state.isLoginSuccess = action.payload;
    },
    removeCurrentUser: (state)=>{
      state.userInfo = {
        id: null,
        username: null,
      };
    }
  },

  extraReducers: (builder) =>{

    //get user info by token in local storage
    builder.addCase(getCurrentUser.pending, (state) => {
      state.isLoading = true,
      state.errorMessage = null;
      state.isLoginSuccess = false;
    });

    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.isLoading = false,
      state.userInfo = action.payload;
    });

    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.errorMessage = action.payload as unknown as string;
    });
  }
});

export { setAuthToken, getAuthToken, removeLocalStorage };
export const { reducer, actions } = authSlice;
export const { showLoginSuccess, removeCurrentUser } = actions;
export default reducer;