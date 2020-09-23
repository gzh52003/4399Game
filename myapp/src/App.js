import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { ListView } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import Hook from './pages/Hook'
import Logo from "./HOOK/Logo";
class App extends React.Component {
  state = {
    num:'\u5e2e\u52a9\u7279\u79cd\u5175\u5b8c\u6210\u4efb\u52a1\u5427\uff01'
  }
  changeNumber = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
    // console.log('App.props',this.props)
    return (
      <div>
        {/* <Logo /> */}
        <Hook/> 
      </div>
    );
  }

}

export default App;

