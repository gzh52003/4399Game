import React,{useState,useReducer,lazy} from 'react'
import {Switch,Route} from 'react-router-dom'
// import request from '../utils/request.js'
import UseReducer from '../../HOOK/UseReducer.js'
const MineXi = lazy(()=>import("./MineXi"))
const Mygame = lazy(()=>import("./Mygame"))
const Mine = lazy(()=>import("./Mine"))



function Index(){
	const state = useReducer(UseReducer)
		console.log(state)
	return (
	<div>Index
	
	
		<Switch>
			<Route path="/mine" component={Mine}> </Route>
			<Route path="/minexi" component={MineXi}/>
			<Route path="/mygame" component={Mygame}/>	
		</Switch>
	</div>
	
	)
		
		
		
	
	
}

export default Index