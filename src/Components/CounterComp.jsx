import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/counterSlice';

function CounterComp() {

  const count = useSelector((state)=>state.counterReducer.counterValue);

  const dispatch = useDispatch();

  return (
    <div className='d-flex justify-content-center align-items-center bg-info fw-bold text-light fs-3'
    style={{height:'100vh',width:'100%'}}>
        <div className='d-flex flex-column border border-dark border-3 rounded p-3'>
            <div className='d-flex justify-content-center align-items-center flex-column'>
            <h3 className='mb-3'>Counter Application</h3>
            <h3>{count}</h3>
        </div>
        <div className='d-flex justify-content-between align-items-center mt-4'>
            <button onClick={()=>dispatch(increment())} className='btn btn-dark mx-1'>Increment</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-dark mx-1'>Reset</button>
            <button onClick={()=>dispatch(decrement())} className='btn btn-dark mx-1'>Decrement</button>
        </div>
        </div>
        
    </div>
  )
}

export default CounterComp