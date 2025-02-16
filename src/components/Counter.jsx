import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, decrementByAmount, divideByAmount, increment, incrementByAmount, multiplyByAmount, reset, roundof } from '../redux/userSlice';

const Counter = () => {
    const [addValue, setAddValue] = useState("");
    const [subtValue, setSubtValue] = useState("");
    const [mulValue, setMulValue] = useState("");
    const [divValue, setDivValue] = useState("");


    const count = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
  return (
    <>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
        <span style={{marginLeft:"30px"}}>{count}</span>
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br />
        <br />
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(roundof())} style={{marginLeft:"10px"}}>Round of</button>
        <br />
        <br />

        <input type="text" placeholder='Enter value for add' onChange={(e) => setAddValue(e.target.value)} value={addValue}/>

        <button onClick={() => {dispatch(incrementByAmount(addValue)); setAddValue("")}}>Add value</button>
        <br />
        <br />
        <input type="text" placeholder='Enter value for subtract' onChange={(e) => setSubtValue(e.target.value)} value={subtValue}/>

        <button onClick={() => dispatch(decrementByAmount(subtValue))}>Subtract value</button>

        <br />
        <br />

        <input type="text" placeholder='Enter value for multiply' onChange={(e) => setMulValue(e.target.value)} value={mulValue}/>

        <button onClick={() => dispatch(multiplyByAmount(mulValue))}>Multiply value</button>

        <br />
        <br />

        <input type="text" placeholder='Enter value for divide' onChange={(e) => setDivValue(e.target.value)} value={divValue}/>

        <button onClick={() => dispatch(divideByAmount(divValue))}> Divide value</button>

      </div>
    </>
  )
}

export default Counter