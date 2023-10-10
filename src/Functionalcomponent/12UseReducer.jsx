import React, { useCallback } from 'react'
import { useReducer } from 'react'
import Reducer from './reducer'

const initialvalue = 0
const reducermethod = (state, action) =>{
    if (action.type === "INCE") {
        return state + 1
    }
    if (action.type === "DECE") {
        return state - 1
    }
    return state
} 
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducermethod, initialvalue)
    const reducer = useCallback(reducermethod,[state])
    return (
        <div>
            <h1>UseReducer</h1>
            {/* <h2>{state}</h2> */}
            <button onClick={() => dispatch({ type: "INCE" })}>+</button>&nbsp;
            <button onClick={() => dispatch({ type: "DECE" })}>-</button>

            <Reducer state={state} reduce={reducer} />
        </div>
    )
}

export default UseReducer
