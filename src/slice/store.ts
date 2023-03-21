import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { homeApi } from '@/service/homeService';
import authReducer from './authSlice';
import commentReducer from './commentSlice';
import messageReducer from './message';

const reducer = combineReducers({
    [homeApi.reducerPath]: homeApi.reducer,
    authReducer,
    commentReducer,
    messageReducer,
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