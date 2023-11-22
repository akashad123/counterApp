import React, { useState } from 'react'
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../Redux/counterSlice';

function Counter() {

  const [range, setRange] = useState("")

  // Hook to dispatch a function in action
  const dispatch = useDispatch()
  
  // Component can access the state by using useSelector hook
  const count = useSelector((state)=>state.counter.value)

  console.log(range);

  // Range clear is not working, clear doubt
  const rangeReset = ()=>setRange("")
  

  return (

      <div className='d-flex align-items-center justify-content-center flex-column rounded border p-5'>
  
            <h1 className='text-light'>COUNTER APPLICATION</h1>
            <h1 className='mt-5 fw-bolder text-light'>{count}</h1>
  
            <Stack className='mt-5' direction="row" spacing={2}>
              <Button onClick={()=>dispatch(increment(Number(range)))} className='bg-success' variant="contained">Increment</Button>
              <Button onClick={()=>dispatch(decrement(Number(range)))} className='text-dark bg-warning' variant="contained">Decrement</Button>
              <Button onClick={()=>dispatch(reset())} className='bg-danger' variant="contained">Reset</Button>
            </Stack>

            <div className='mt-5 w-100 d-flex justify-content-center align-items-center gap-2'>
              <input type="text" placeholder='Enter range' className='form-control p-2' onChange={(e)=>setRange(e.target.value)} />
              <Button onClick={rangeReset} className='bg-warning text-danger' variant="contained">Reset</Button>
            </div>
          
        </div>

  )
}

export default Counter