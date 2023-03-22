import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import { useAppDispatch } from '@/service/hooks';
import { getCurrentUser } from '@/service/authService';
import { getAuthToken } from '@/service/utils';
import Home from './pages/Home';
import Login from './pages/Login';
import PostPage from './pages/PostPage/PostPage';
import Post from './pages/PostPage/Post';
import MessageBoard from './pages/PostPage/MessageBoard';

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
        path: "/message-board",
        element: <MessageBoard/>,
    },
    {
        path: "/posts",
        element: <PostPage/>,
        children:[
            {
                path: "/posts/:id",
                element:<Post/>
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