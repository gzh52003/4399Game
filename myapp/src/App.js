import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { ListView } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import Recommend from './views/Recommend/recommend.js'
import Header from './views/Header.js'
class App extends React.Component {

  render() {
    return (
      <div className="App">
	  <Header />
		<Recommend />
      </div>
    );
  }

}
App=withRouter(App)
export default App;

