import React, { useEffect, useLayoutEffect, useState } from 'react'

const Uselayouteffect = () => {
    const [text, setText] = useState("code start")
    const [loading, setLoading] = useState(false)
    // useLayoutEffect(()=>{
    //     console.log("useLayout effect");
    //     if (!loading) {
    //         setText("code Welcome")
    //     }
    //     else{
    //         setText("code start")
    //     }
    // })
    useEffect(()=>{
        console.log("use effect");
        if (!loading) {
            setText("code Welcome")
        }
        else{
            setText("code start")
        }

    },[loading])
  return (
    <div>
      <h1>layoutEffect</h1>
      <p>{text}</p>
    </div>
  )
}

export default Uselayouteffect
