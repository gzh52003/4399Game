
import React, { useState, useEffect,useCallback,useReducer, useMemo } from 'react';

let instate={}

function UseReducer(state,action){
    switch (action.type) {
        case 'add':
            return {action,...state};
			console.log(state)
        case 'remove':
            return state.filter(item => item.name != action.name);
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
export default UseReducer