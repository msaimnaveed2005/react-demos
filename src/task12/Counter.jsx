import React, { useReducer, useState } from 'react'
import counterReducer from './counterReducer';
const Counter = () => {

   
     const initialState = {count: 0};
    const [state,dispatch]=useReducer(counterReducer,initialState);
    const [inputValue,setInputValue]=useState(0);

    const handleIncrementByAmount=()=>
    {
        dispatch({type: "incrementByAmount", payload:Number(inputValue)});
        setInputValue(0);
    }
    const handleDecrementByAmount=()=>
    {
        dispatch({type: "decrementByAmount", payload:+inputValue});
        setInputValue(0);
    }
  return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        <div>
            <input type='number' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <button onClick={handleIncrementByAmount}>+</button>
            <button onClick={handleDecrementByAmount}>-</button>
        </div>
    </div>

    
  )
}

export default Counter