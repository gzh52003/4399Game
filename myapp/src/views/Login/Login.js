import React,{useReducer,useState,useCallback,lazy,useHistory} from 'react'
import request from '../../utils/request'
import './Login.css'
import { NavBar, Icon,List, InputItem,Button, WhiteSpace, WingBlank,Toast } from 'antd-mobile';
import { createForm,formShape } from 'rc-form';
class Login extends React.Component{
	state ={
		username:"",
		password:""
	}
	
	onChange=(val)=>{
		
		this.setState({
			...this.state,
			username:val,
			
		})
	}
	
	onPass=(val)=>{
		
		this.setState({
			...this.state,
			password:val,
			
		})
	}
	 login = async (val)=>{
					const data = await request.get('/login',{
						...val
					})
					console.log(data)
					if(data.code===0){
					
					showToast()
				function showToast() {
				  Toast.info('账号或密码错误！！！', 1);
				  return
				}
						
					}else{
						
					}
			}
		
	render(){
		
			
	return (
		<div>
	 <NavBar
		  icon={<Icon type="left" />}
	 	  leftContent={["返回"]}
	      mode="light"
		  style={{background:"#000",color:"#ffffff"}}
	    >4399账号登陆</NavBar>
		<List   >
		          <InputItem
		           type="text"
				   clear="true"
				   onChange={this.onChange}
		          >账号</InputItem>
		          <InputItem
		            type="password"
					 clear="true"
					  onChange={this.onPass}
		          >密码</InputItem>
		        </List>
				<Button onClick={this.login.bind(this,{...this.state})} style={{background: "#70c700",margin:"10px",color:"#fff"}} size="large" type="登录">登录</Button><WhiteSpace />
				<div style={{textAlign:"right",color:"#999"}}>
					<span>注册</span><span style={{margin:"0px 10px 0px 10px"}}>|</span><span>忘记密码(?)</span>
				</div>
				
	</div>
	
	)
		
		
	}
		
	
	
}
export default Login