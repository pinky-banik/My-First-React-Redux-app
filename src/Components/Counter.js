import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from './../services/actions/counterAction';

const Counter = () => {
    const count = useSelector(state=>state.count);
    const dispatch = useDispatch();
    const handleIncrement =()=>{
        dispatch(incrementCounter());
    }
    const handleDecrement =()=>{
        dispatch(decrementCounter());
    }
    const handleReset =()=>{
        dispatch(resetCounter());
    }
    return (
        <div>
            <h2>My Counter App</h2>
            <h3>Count : {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>DECREMENT</button>
            <button onClick={handleReset}>RESET</button>
        </div>
    );
};

export default Counter;

// Counter =>  Counter2 => Counter3 => Counter4
// 1. state - count : 0
// 2. action - increment,decrement,reset 
// 3. reducers - increment -> count = count +1
// - decrement -> count = count -1
// - reset -> count = 0
// 4. store 
// 5. providing store
// 6. use store