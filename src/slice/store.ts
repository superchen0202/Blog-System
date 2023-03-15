import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { homeApi } from '@/service/homeService';

const reducer = combineReducers({
    [homeApi.reducerPath]: homeApi.reducer,
})

export const store = configureStore({

    reducer,
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(homeApi.middleware)
})

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export default store;