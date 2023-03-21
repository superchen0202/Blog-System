import { 
    useRoutes, 
    RouteObject,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PostPage from './pages/PostPage/PostPage';
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
        element: <Home/>,
        children:[
            {
                path: "/posts/:id",
                element:<PostPage/>
            }
        ]
    }
];

const App = () => {
    const routes = useRoutes(routesConfig);
    return(routes);
}

export default App;