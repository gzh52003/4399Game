import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router-dom';
import { ListView } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';

class App extends React.Component {
  state = {
   
  }
  changeNumber = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
   
    return (
      <div className="App">
		
      </div>
    );
  }

}
App=withRouter(App)
export default App;

