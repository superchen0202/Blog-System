import { 
    useRoutes, 
    RouteObject,
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login';
import Post from './pages/Post';
import MessageBoard from './shared/MessageBoard';
import BlogPost from './pages/PostPage';

const routesConfig: RouteObject[] = [
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/posts",
        element: <BlogPost/>,
        children:[
            {
                path: "/posts/:id",
                element:<Post/>
            }
        ]
    },
    {
        path: "/message-board",
        element: <MessageBoard/>,
    },
    {
        path: "/login",
        element: <Login/>,
    }
];

const App = () => {
    const routes = useRoutes(routesConfig);
    return(routes);
}

export default App;