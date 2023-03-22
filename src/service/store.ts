import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { homeApi } from './homeService';
import authReducer from './authService';
import commentReducer from './commentService';

const reducer = combineReducers({
    [homeApi.reducerPath]: homeApi.reducer,
    authReducer,
    commentReducer,
});

export const store = configureStore({

    reducer,
      
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(homeApi.middleware)
})

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export default store;