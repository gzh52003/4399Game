import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import React,{useState,useReducer} from 'react';
import { withRouter ,useHistory} from 'react-router-dom';

 const inState = [{
	 tabs:[{ title: <Badge >推荐</Badge>,path:'/recommend' },
        { title: <Badge >最新</Badge>, path:'/recommend'},
        { title: <Badge >排行</Badge>, path:'/rank'},
        { title: <Badge >分类</Badge> ,path:'/recommend'},
        { title: <Badge >论坛</Badge> ,path:'/recommend'}],
	 Tabidx:[{Tabindex:0}]
 }]
	 
  

function reducer(state,action){
	
	
	switch (action.type) {
	    case 'add':
		action =[action.tabs]
	
	        return [...action];
	    default:
	        throw new Error('type error');
	}
}

function Indexnav(){ 
	const [state,dispatch] =useReducer(reducer,inState)
	let history =useHistory()
	
	 
	  
    return(
		
        <div>
            <Tabs tabs={state[0].tabs}
		
       initialPage={state[0].Tabindex}
      onChange={(tab, index) => { dispatch({type:'add',tabs:{
	 tabs:[{ title: <Badge >推荐</Badge>,path:'/recommend' },
        { title: <Badge >最新</Badge>, path:'/recommend'},
        { title: <Badge >排行</Badge>, path:'/rank'},
        { title: <Badge >分类</Badge> ,path:'/recommend'},
        { title: <Badge >论坛</Badge> ,path:'/recommend'}],
	 Tabidx:[{Tabindex:index}]
 }})}}
      onTabClick={(tab, index) =>history.push(tab.path)}
      animated={false}
    >
    </Tabs>

        </div>
    )

}
export default Indexnav