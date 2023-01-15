import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement , incrementByAmount } from '../reducer/counterSlice'



export default function Counter() {
    const counterState = useSelector( (state)=>state.counter ); //traer el dato
    
    const dispatch = useDispatch();
    
    const [amount, setAmount] = useState("5");

    const handleByAmount = () => {
        dispatch(incrementByAmount(Number(amount)));
    };

  return (
    <div>
    <h2>Counter: {counterState.value}</h2>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <input 
    type="number" 
    value={amount} 
    onChange={(e)=>setAmount(e.target.value)} />
    <button onClick={handleByAmount}>
        by amount</button>
    </div>
  )
}