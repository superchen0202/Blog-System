import { 
    useRoutes, 
    RouteObject,
    useParams
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login';
import PostPage from './pages/PostPage';
import MessageBoard from './shared/MessageBoard';
import BlogPost from './pages/BlogPost';

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
                element:<PostPage/>
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