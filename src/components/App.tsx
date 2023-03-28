import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import { useAppDispatch } from '@/service/hooks';
import { getCurrentUser } from '@/service/authService';
import { getAuthToken } from '@/service/utils';
import Home from './pages/Home';
import Login from './pages/Login';
import PostContainer from './pages/PostList/PostContainer';
import PostPage from './pages/PostList/PostPage';
import PostEditor from './pages/PostEditor';

const routesConfig: RouteObject[] = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/post-editor",
        element: <PostEditor/>,
    },
    {
        path: "/posts",
        element: <PostContainer/>,
        children:[
            {
                path: "/posts/:id",
                element:<PostPage/>
            }
        ]
    }
];

const App = () => {

    const dispatch = useAppDispatch();

    React.useEffect(() => {
    //if token exists in local storage, get user info from Redux state.
    if(getAuthToken()){
        dispatch(getCurrentUser());
    }
    }, [])

    const routes = useRoutes(routesConfig);
    return(routes);
}

export default App;