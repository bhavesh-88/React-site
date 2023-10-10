import React, { useState } from 'react'

const Functioncount = () => {
    const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={()=>setCount(count + 1)}>Add{count}</button>
    </>
  )
}

export default Functioncount
