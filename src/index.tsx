import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "./css/style.scss";
import store from './service/store';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
// const Provider = lazy(() => import('react-redux').then(({Provider}) => ({default: Provider})));
// const Router = lazy(() => import('react-router-dom').then(({HashRouter}) => ({default: HashRouter})));
const App = lazy(() => import('./components/App'));
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
<Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </Router>
    </Provider>
  </Suspense>
);