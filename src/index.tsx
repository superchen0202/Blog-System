import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./css/style.scss";
import store from './service/store';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
//<React.StrictMode>
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
//</React.StrictMode>
);