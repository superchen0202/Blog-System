import React, { useEffect, lazy, Suspense } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/service/hooks';
import { getAuthToken, getCurrentUser } from '@/service/authService';
// /*
import Home from './pages/Home';
import AllPosts from './pages/Home/AllPosts';
import PostPage from './pages/PostPage';
import MyPostList from './pages/MyPostList';
import MyPostEditor from './pages/MyPostList/MyPostEditor';
import PostEditor from './pages/PostEditor';
import Login from './pages/Login';
// */
/*
const Home = lazy(() => import('./pages/Home'));
const AllPosts = lazy(() => import('./pages/Home/AllPosts'));
const PostPage = lazy(() => import('./pages/PostPage'));
const MyPostList = lazy(() => import('./pages/MyPostList'));
const MyPostEditor = lazy(() => import('./pages/MyPostList/MyPostEditor'));
const PostEditor = lazy( () => import('./pages/PostEditor'));
const Login = lazy( () => import('./pages/Login'));
// */

const App = () => {

    const dispatch = useAppDispatch();
    const username = useAppSelector((state)=>state.authReducer.userInfo.username);

    useEffect(() => {
        //if token exists in local storage, get user info from Redux state.
        if(getAuthToken()){
            dispatch(getCurrentUser());
        }
    }, [])

    const routesConfig: RouteObject[] = [
        {
            path: "/",
            element: <Home/>,
            children:[
                {
                    index: true,
                    element: <AllPosts/>,
                },
                {
                    path: "/posts/:id",
                    element: <PostPage/>,
                },
                {
                    path: `/${username}/posts`,
                    element: <MyPostList/>,
                },
                {
                    path: `/${username}/posts/edit/:id`,
                    element:<MyPostEditor/>,
                },
                {
                    path: "/post-editor",
                    element: <PostEditor/>,
                },
                {
                    path: "/login",
                    element: <Login/>,
                },
            ]
        }
    ];

    const routes = useRoutes(routesConfig);
    return(routes);
}

export default App;