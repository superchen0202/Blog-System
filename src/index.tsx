import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./css/style.scss";
import { HashRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>    
    </React.StrictMode>
);