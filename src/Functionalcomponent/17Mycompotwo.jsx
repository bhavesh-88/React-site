import React from 'react'
import useCustomhook from './19useCustomhook'

const Mycompotwo = () => {
    const [count, setCount] = React.useState(0)

    // useEffect(()=>{
    //     document.title = `Count ${count}`
    // },[count])

    useCustomhook(count)
    return (
      <>
        <h1>my data</h1>
        <button onClick={()=>setCount(count + 1) }>{count} : Count</button>
      </>
    )
}

export default Mycompotwo
