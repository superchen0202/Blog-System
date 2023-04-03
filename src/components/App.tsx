import { useEffect } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { useAppDispatch } from '@/service/hooks';
import { getAuthToken, getCurrentUser } from '@/service/authService';
import Home from './pages/Home';
import AllPosts from './pages/Home/AllPosts';
import PostPage from './pages/PostPage';
import MyPostList from './pages/MyPostList';
import MyPostEditor from './pages/MyPostList/MyPostEditor';
import PostEditor from './pages/PostEditor';
import Login from './pages/Login';

const App = () => {
    
    const dispatch = useAppDispatch();

    useEffect(() => {
    //if token exists in local storage, get user info from Redux state.
    if(getAuthToken()){
        dispatch(getCurrentUser());
    }
    }, [dispatch])
    
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
                    path: `/:username/posts`,
                    element: <MyPostList/>,
                },
                {
                    path: `/:username/posts/edit/:id`,
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