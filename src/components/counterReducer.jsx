import React, { useReducer } from 'react'

     const counterReducer=(state,action)=>
    {
        switch (action.type) {
            case 'increment':
                return {...state,count:state.count+1}
                break;
            case 'decrement':
                return {...state,count:state.count-1}
                break;
            case 'incrementByAmount':
                return {...state,count:state.count+action.payload}
                break;
            case 'decrementByAmount':
                return {...state,count:state.count-action.payload}
                break;
            case 'reset':
                return {...state,count:0}
                break;
            default:
                return state;
                break;
        }
    }
export default counterReducer