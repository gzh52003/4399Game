import React,{useReducer,useState,useCallback,lazy,useHistory} from 'react'
import { NavBar, Icon,Flex,List} from 'antd-mobile';

import UseReducer from '../../HOOK/UseReducer'
// console.log(UserReducer)
import {UserOutlined,FileZipOutlined,GiftFilled,MailFilled,PhoneFilled} from '@ant-design/icons'
import {Switch,Route,withRouter} from 'react-router-dom'
import './Mine.css'
const Item = List.Item;
const Brief = Item.Brief;
const MineXi = lazy(()=>import("./MineXi"))
const Mygame = lazy(()=>import("./Mygame"))
// import Index from './Index.js'


class Mine extends React.Component{
	 state = {
		Mine:[
				{
					path:"/mineXi",
					name:"个人信息",
					ico:<UserOutlined />
				},
				{	
					path:"/mygame",
					name:"我的游戏",
					ico:<FileZipOutlined />
				},
				{
					path:"/activity",
					name:"活动中心",
					ico:<GiftFilled />
				},
				{
					path:"/notice",
					name:"系统通知",
					ico:<MailFilled />
				},
				{
					path:"/telephone",
					name:"联系我们",
					ico:<PhoneFilled />
				},
				
			],
};

		// let [state,dispatch] = useReducer(UseReducer,initState)
		// let [props] = useHistory(1)
		 add =()=>{
		}
		
		render(){
			// console.log(this.props)
				return(
			<div>
			<Switch>
			<Route>
			<NavBar
		      mode="light"
			  style={{color:"#ffffff",background:"#45b0e4"}}
		      icon={<Icon type="left" />}
			  leftContent={["返回"]}
		      onLeftClick={() => console.log('onLeftClick')}
		      rightContent={[]}
		    >个人中心</NavBar>
			  <Flex style={{textAlign:"center",background:"#45b0e4"}}>
			      <Flex.Item></Flex.Item>
			      <Flex.Item>
				  <div>
				  <a style={{display:"inline-block",lineHeight: "40px",lin:"center"}}><span>头像</span></a>
				  <p>登录</p>
				  </div>
				  </Flex.Item>
			      <Flex.Item></Flex.Item>
			    </Flex>
				<List style={{marginTop:"15px",}}  className="my-list">{
					this.state.Mine.map(item=>{
			return(
		    <Item   key={item.path} arrow="horizontal" multipleLine onClick={this.add}>
		<span style={{marginRight:"10px"}}>{item.ico}</span>
		      {item.name}
		    </Item>
			)
			
		})}</List>
	
				</Route>
				<Route path="/minexi" component={MineXi}/>
				<Route path="/mygame" component={Mygame}/>	
		
		</Switch>
		</div>
		
	)
		}

		
	
}
Mine = withRouter(Mine)

export default Mine