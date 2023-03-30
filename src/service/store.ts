import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { postsApi } from './potsService';
import authReducer from './authService';
import commentReducer from './commentService';

const reducer = combineReducers({
    [postsApi.reducerPath]: postsApi.reducer,
    authReducer,
    commentReducer,
});

export const store = configureStore({

    reducer,
      
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(postsApi.middleware)
})

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export default store;