import React,{useReducer,useState,useCallback,lazy,useHistory} from 'react'
import request from '../../utils/request'
import './Reg.css'
import { NavBar, Icon,List, InputItem,Button, WhiteSpace, WingBlank,Toast,Checkbox } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
class Reg extends React.Component{
	state ={
		username:"",
		password:"",
		vcode:"",
		checked:false,
		regAdd:false
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
	
    userBlur =async ()=>{
		
			const data = await request.get('/reg/check',{...this.state})
		
		if(this.state.username===""){
			showToast()
			function showToast() {
				Toast.info('请输入账号！！！', 2);
				return 
		}
		}else if(data.code===0){
			showToast()
			function showToast() {
				Toast.info('此账号已被注册', 2);
				return 
	}
	}else {
		this.setState({
			...this.state,
			regAdd:true
		})
	}
	}
	onChecked = ({target}) =>{
				console.log(target)
				this.setState({
					...this.state,
					checked:target.checked
				})
				
		
	}
	 reg = async (val)=>{
				console.log(this.state)
				if(!this.state.regAdd){
				showToast()
				function showToast() {
				  Toast.info('未输入账号或账号已被注册！！！！',);
				 return
				}
				
				}else if(!this.state.checked){
					showToast()
					function showToast() {
					  Toast.info('请阅读并勾选用户协议！！！！',);
					 return
				}
				}else {
					const data = await request.post('/reg',{...val})
					
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
	    >4399账号注册</NavBar>
		<List   >
		          <InputItem
		           type="text"
				   clear="true"
				   onChange={this.onChange}
				   onBlur={this.userBlur}
		          >账号</InputItem>
		          <InputItem
		            type="password"
					 clear="true"
					  onChange={this.onPass}
		          >密码</InputItem>
		        </List>
				<div>
				<CheckboxItem defaultChecked={this.state.checked} onChange={this.onChecked}>我已同意<span style={{color:"#6fc700"}}>《用户协议》</span></CheckboxItem>  </div>
				<Button onClick={this.reg.bind(this,{...this.state})} style={{background: "#70c700",margin:"10px",color:"#fff"}} size="large" type="注册">注册</Button><WhiteSpace />
				<div style={{textAlign:"right",color:"#999"}}>
					<span>已有帐号点击登录</span>
				</div>
				
	</div>
	
	)
		
		
	}
		
	
	
}
export default Reg