import React ,{useCallback, useState}from 'react'
import Usechild from './09Usechild'

const Usecallback = () => {
    const [count, setCount] = useState(1)
    // function loading() {
        
    // }
    const loadingwithcallback = useCallback(function loading() {
        
    },[])
  return (
    <>
      <h1>UseCallback</h1>
      {/* <Usechild loading = {loading}/> */}
      <Usechild loading = {loadingwithcallback}/>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count*2)}>click</button>
    </>
  )
}

export default Usecallback
