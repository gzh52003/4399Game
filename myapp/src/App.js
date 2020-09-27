import React,{lazy,Suspense} from 'react';
import './App.css';
import { withRouter ,Route,Redirect,Switch} from 'react-router-dom';
import { ListView } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import Mygame from './views/Mine/Mygame';
const New = lazy(()=> import('./views/News/New'))  
const Recommend =lazy(()=> import('./views/Recommend/recommend.js'))  
const Login = lazy(()=> import('./views/Login/Login'))
const Reg = lazy(()=> import('./views/Reg/Reg'))
const Mine = lazy(()=> import('./views/Mine/Mine'))
const Search =lazy(()=> import("./views/Search/Search"))
const Rank =lazy(()=> import("./views/Rank/Rank"))
const MYgame =lazy(()=> import("./views/Mine/Mygame"))
class App extends React.Component {

  render() {
    return (
      <div className="App">
		<Suspense fallback={<div>loading...</div>}>
			<Switch>
			<Route path="/New" component={New} />
			<Route path="/login" component={Login} />
			<Route path="/reg" component={Reg} />
			<Route path="/mine" component={Mine} />
			<Route path="/search" component={Search} />
		  <Route path="/recommend" component={Recommend} />
      <Route path="/rank" component={Rank}/>
	  <Route path="/mygame" component={Mygame}/>
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

