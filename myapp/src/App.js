import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router-dom';
import { ListView } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
class App extends React.Component {
  state = {
    num: 10
  }
  changeNumber = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
    console.log('App.props',this.props)
    return (
      <div className="App">

      </div>
    );
  }

}

export default App;

