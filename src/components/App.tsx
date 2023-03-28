import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/service/hooks';
import { getCurrentUser } from '@/service/authService';
import { getAuthToken } from '@/service/utils';
import Home from './pages/Home';
import Login from './pages/Login';
import PostContainer from './pages/PostList/PostContainer';
import PostPage from './pages/PostList/PostPage';
import PostEditor from './pages/PostEditor';
import MyPostList from './pages/MyPostList';
import MyPostEditor from './pages/MyPostList/MyPostEditor';
import MyPostContainer from './pages/MyPostList/MyPostContainer';

const App = () => {

    const dispatch = useAppDispatch();
    const username = useAppSelector((state)=>state.authReducer.userInfo.username);

    React.useEffect(() => {
    //if token exists in local storage, get user info from Redux state.
    if(getAuthToken()){
        dispatch(getCurrentUser());
    }
    }, [])

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
            path: `/${username}/posts`,
            element: <MyPostList/>,
        },
        {
            path: `/${username}/posts/edit`,
            element:<MyPostContainer/>,
            children:[
                {
                    path: `/${username}/posts/edit/:id`,
                    element:<MyPostEditor/>,
                }
            ]
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

    const routes = useRoutes(routesConfig);
    return(routes);
}

export default App;