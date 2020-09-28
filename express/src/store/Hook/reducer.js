
import React, {useReducer} from 'react';

const instate={
	user:[],
	showHeader:false
}

function reducer(state,action){
    switch (action.type) {
        case 'add':
            return {...state};
        case 'remove':
            return state.filter(item => item.name !== action.name);
        case 'changeQty':
            return state.map(item=>{
                if(item.name === action.name){
                    item.qty = action.qty;
                }
                return item;
            })
        case 'clear':
            return [];
        default:
            throw new Error('type error');
    }
	
}

export const MyContext = React.createContext(null)


export function Provider(props){
	const [state,dispatch] = useReducer(reducer,instate)
	
	return (
		<MyContext.Provider value={{state,dispatch}}>
			{props.children}
		</MyContext.Provider>
	)
}