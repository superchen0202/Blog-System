import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@/service/api";
import { setMessage } from "./message";
import { getAuthToken } from "@/service/utils";

export type User = {
    username: string,
    password: string,
};

export const login = createAsyncThunk( "login",

    async ( user: User, thunkAPI) => {
      try{
        const token = await AuthService.login(user);
        const username = await AuthService.getCurrentUser().then(response => response.data.username);
        return { username };
      }
      catch(err){   
        const error = err as Error;
        const message = error.toString();

        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue(message);
      }
    }
);
export const getMe = createAsyncThunk( "me",

    async (_, thunkAPI) => {
      try{
        const username = await AuthService.getCurrentUser().then(response => response.data.username);
        return { username };
      }
      catch(err){   
        const error = err as Error;
        const message = error.toString();

        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue(message);
      }
    }
);

const username = "";
const initialState = getAuthToken() ? { username, isLoggedIn: true } : { username: null, isLoggedIn: false };

const authSlice = createSlice({
    
    name: 'authSlice',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{

        builder.addCase(login.fulfilled, (state, action) => {
          state.isLoggedIn = true;
          state.username = action.payload.username;
        });

        builder.addCase(login.rejected, (state)=>{
          state.isLoggedIn = false;
          state.username = null;
        });

        builder.addCase(getMe.fulfilled, (state, action) => {
          state.isLoggedIn = true;
          state.username = action.payload.username;
        });

        builder.addCase(getMe.rejected, (state)=>{
          state.isLoggedIn = false;
          state.username = null;
        });     
    }
});

export const { reducer, actions } = authSlice;
export default reducer;