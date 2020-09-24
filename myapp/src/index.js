import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from './stroe/Hook/reducer.js'
import {HashRouter,BrowserRouter} from 'react-router-dom'

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
	<Provider>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
	</Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();