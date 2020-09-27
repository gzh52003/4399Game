import React,{useReducer,useState,useCallback,lazy,useHistory} from 'react'
import { NavBar, Icon,Flex,List} from 'antd-mobile';

import {UserOutlined,FileZipOutlined,GiftFilled,MailFilled,PhoneFilled} from '@ant-design/icons'
import {Switch,Route,withRouter} from 'react-router-dom'
import './Mine.css'
const Item = List.Item;
const Brief = Item.Brief;
const MineXi =lazy(()=> import("./MineXi"));
const Mygame =lazy(()=> import("./Mygame"));
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
		 add =()=>{
			 

		}
		componentDidMount(){
			const currentUser = localStorage.getItem("currentUser");
			console.log(currentUser)
				const user = JSON.parse(currentUser)
				this.setState({
					...this.state,
					user:user
				})
		}
		remove = (path)=>{
			console.log(1)
		}
	
		render(){
			const {user} =this.state
			
		return(
			<div>
			<NavBar
		      mode="light"
			  style={{color:"#ffffff",background:"#45b0e4"}}
		      icon={<Icon type="left" />}
			  leftContent={["返回"]}
		      onLeftClick={() => this.props.history.push("/recommend/")}
		      rightContent={[]}
		    >个人中心</NavBar>
			  <Flex style={{textAlign:"center",background:"#45b0e4"}}>
			      <Flex.Item></Flex.Item>
			      <Flex.Item>
				  {
				   user?<div>
				<a style={{display:"inline-block",paddingTop:"10px"}}><span><img style={{width:"61px",borderRadius:"50%",}} src={user.avatarUrl}/></span></a>
				  <p style={{color:"#fff"} } onClick={this.remove}>{user.username}</p>
				 </div>:<div>
					   <a style={{display:"inline-block",paddingTop:"10px"}}><span><img style={{width:"61px",borderRadius:"50%",}} src="/images/touxiangimg.png"/></span></a>
					  <p style={{color:"#fff"} } onClick={()=>{this.props.history.push('/login')} }>请登录</p>
					  </div>
				  }
				  </Flex.Item>
			      <Flex.Item></Flex.Item>
			    </Flex>
				<List style={{marginTop:"15px",}}  className="my-list">{
					this.state.Mine.map(item=>{
			return(
		    <Item   key={item.path} arrow="horizontal" multipleLine onClick={this.add.bind(this,item.path)}>
		<span style={{marginRight:"10px"}}>{item.ico}</span>
		      {item.name}
		    </Item>
			)
			
		})}</List>
	</div>
		
	)
		}

		
	
}
Mine = withRouter(Mine)

export default Mine