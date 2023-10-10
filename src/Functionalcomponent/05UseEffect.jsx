import React, { useEffect, useState } from 'react'
import User from './User'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(2)
    // useEffect(()=>{
    //     // alert("UeeEffect")
    //     console.log(" called effect");
    // })
    // useEffect(()=>{
    //     // alert("UeeEffect")
    //     console.log(" called effect");
    // },[])

    // useEffect(()=>{
    //     // alert("UeeEffect")
    //     console.log("effect");
    // },[count])
  return (
    <>
    <h1>UseEffect</h1>
    {/* <h3>{count}</h3>
    <h3>{data}</h3> */}
    <User count = {count} data = {data}/>
    <button onClick={()=> setCount(count + 1)}>Update count</button>
    <button onClick={()=> setData(data * 2)}>Update count</button>
    </>
  )
}

export default UseEffect
