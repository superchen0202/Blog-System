import { useEffect, lazy, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { useAppDispatch } from '@/service/hooks';
import { getAuthToken, getCurrentUser } from '@/service/authService';
import { DataIsLoading } from './shared/LoadingAndErrorInfo';
const Home = lazy(()=> import('./pages/Home'));
const AllPosts = lazy(()=> import('./pages/Home/AllPosts'));
const PostPage = lazy(()=> import('./pages/PostPage'));
const MyPostList = lazy(()=> import('./pages/MyPostList'));
const MyPostEditor = lazy(()=> import('./pages/MyPostList/MyPostEditor'));
const PostEditor = lazy(()=> import('./pages/PostEditor'));
const Login = lazy(()=> import('./pages/Login'));

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
            element: (
                <Suspense fallback={<DataIsLoading/>}>
                    <Home/>
                </Suspense>
            ),
            children:[
                {
                    index: true,
                    element: (
                        <Suspense fallback={<DataIsLoading/>}> 
                            <AllPosts/>
                        </Suspense>
                    ),
                },
                {
                    path: "/posts/:id",
                    element:(
                        <Suspense fallback={<DataIsLoading/>}> 
                            <PostPage/>
                        </Suspense>
                    ),
                },
                {
                    path: `/:username/posts/edit`,
                    element:(
                        <Suspense fallback={<DataIsLoading/>}> 
                            <MyPostList/>
                        </Suspense>
                    ),
                },
                {
                    path: `/:username/posts/edit/:id`,
                    element: (
                        <Suspense fallback={<DataIsLoading/>}> 
                            <MyPostEditor/>
                        </Suspense>
                    ),
                },
                {
                    path: "/post-editor",
                    element:(
                        <Suspense fallback={<DataIsLoading/>}> 
                            <PostEditor/>
                        </Suspense>
                    ),
                },
                {
                    path: "/login",
                    element:(
                        <Suspense fallback={<DataIsLoading/>}> 
                            <Login/>
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "*",
            element:(
                <div>
                    404 NOT Found X_X
                </div>
            )
        }
    ];

    const routes = useRoutes(routesConfig);
    return(routes);
}

export default App;