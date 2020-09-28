import React, { lazy, Suspense } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';


const Login = lazy(() => import('./views/Login/Login'))
const Home = lazy(() => import('./views/Home'))
const User = lazy(() => import('./views/User/User'))
const Game = lazy(() => import('./views/Game/Game'))
function App() {
  return (
    <div className="App">
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/game" component={Game} />
            <Route path="/login" component={Login} />
            <Route path="/notfound" render={() => <div>404</div>} />
            <Redirect from="/" to="/login" exact />
          </Switch>
        </Suspense>
    </div>
  );
}

export default App;
