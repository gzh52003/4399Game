import React,{lazy,Suspense} from 'react';
import './App.css';
import { withRouter ,Route,Redirect,Switch} from 'react-router-dom';
import { ListView } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
const  Recommend =lazy(()=> import('./views/Recommend/recommend.js'))  
const Login = lazy(()=> import('./views/Login/Login'))
const Reg = lazy(()=> import('./views/Reg/Reg'))
const Mine = lazy(()=> import('./views/Mine/Mine'))
const Search =lazy(()=> import("./views/Search/Search"))
<<<<<<< HEAD
const Rankimg = lazy(()=> import("./views/Rank/onlineGame"))
=======
const Rank =lazy(()=> import("./views/Rank/Rank"))
// const MineXi = lazy(()=>import("./MineXi"))
// const Mygame = lazy(()=>import("./Mygame"))
>>>>>>> ee4b5d7664d7a622e30776a12058b8868918704f
class App extends React.Component {

  render() {
    return (
      <div className="App">
		<Suspense fallback={<div>loading...</div>}>
		<Switch>
		<Route path="/recommend" component={Recommend} />
		<Route path="/login" component={Login} />
		<Route path="/reg" component={Reg} />
		<Route path="/mine" component={Mine} />
		<Route path="/search" component={Search} />
<<<<<<< HEAD
		<Route path="/rankimg" component={Rankimg} />
=======
    <Route path="/rank" component={Rank} />
>>>>>>> ee4b5d7664d7a622e30776a12058b8868918704f
		<Route path="/notfound" render={()=><div>404</div>} />
		<Redirect from="/" to="/recommend" exact/>
		
		</Switch>
		   </Suspense>
      </div>
    );
  }

}
App=withRouter(App)
export default App;

