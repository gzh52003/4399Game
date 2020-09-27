import React, { lazy, Suspense } from 'react';
import './App.css';
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';

const Home = lazy(() => import('./views/Home/Home'))
const Login = lazy(() => import('~/Login/Login'))
const User = lazy(() => import('~/User/User'))
const Game = lazy(() => import('~/Game/Game'))
function App() {
  return (
    <div className="App">
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="home" component={Home} />
            <Route path="user" component={User} />
            <Route path="game" component={Game} />
            <Route path="login" component={Login} />
            <Route path="/notfound" render={() => <div>404</div>} />
            <Redirect from="/" to="/login" exact />
          </Switch>
        </Suspense>
    </div>
  );
}

App = withRouter(App)
export default App;
