/* 
	高阶组件
	是一个纯函数
	必须返回一个新组件
 
 */

import React from 'react'

import {Redirect} from 'react-router-dom'

//应用一：属性代理

export function withUser(InnerComponent){
	
	return class OuterComponent extends React.Component{
		render(){
			let currentUser = localStorage.getItem('currentUser')
			try{
				currentUser = JSON.parse(currentUser)
			}catch(err){
				
				currentUser = currentUser
			}
			if(!currentUser){
				currentUser=[]
			}
			return(
				<InnerComponent {...this.props} currentUser={currentUser} />
			)
		}
	}
	
	
}

export function withStorage(key){
	const value = localStorage.get(key)
	 const data = {
		 [key]:value
	 }
	 return function (InnerComponent){
		 return function OuterComponent(props){
			 return <InnerComponent {...props} {...data}/>
		 }
	 }
}

//反向继承，可以拦截路由
export function withAuth(InnerComponent){
	return class OuterComponent extends InnerComponent{
		
		componentDidMount(){
			super.componentDidMount()
		}
		render() {
			if(this.props.currentUser.username){
				
				return super.render()
			}
			return <Redirect to="/login"/>
			
			}
	}
}

export default {
	withUser,
	withAuth,
	withStorage,
}