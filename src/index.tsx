import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import store from './service/store';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import "./css/style.scss";
// import App from './components/App';
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