import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { postsAPI } from './potsService';
import authReducer from './authService';
import postReducer from './potsService';
import commentReducer, { commentsAPI } from './commentService';

const reducer = combineReducers({
    [postsAPI.reducerPath]: postsAPI.reducer,
    [commentsAPI.reducerPath]: commentsAPI.reducer,
    authReducer,
    postReducer,
    commentReducer,
});

export const store = configureStore({

    reducer,
      
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(postsAPI.middleware)
        .concat(commentsAPI.middleware)
})

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export default store;