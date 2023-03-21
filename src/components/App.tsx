import { 
    useRoutes, 
    RouteObject,
} from 'react-router-dom';
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
    const routes = useRoutes(routesConfig);
    return(routes);
}

export default App;