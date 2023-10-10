import React from 'react'
import useCustomhook from './19useCustomhook'
// import { useEffect } from 'react'

const Mycompo = () => {
    const [count, setCount] = React.useState(0)

    useCustomhook(count)
    // useEffect(()=>{
    //     document.title = `Count ${count}`
    // },[count])
    return (
      <>
        <h1>my data</h1>
        <button onClick={()=>setCount(count + 1) }>{count} : Count</button>
      </>
    )
}

export default Mycompo
