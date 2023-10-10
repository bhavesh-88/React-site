import React,{useMemo, useState} from 'react'

const Usememo = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    // function multicount() {
    //     console.log("called");
    //     return count * 2
    // }
    const multicountwithmemo = useMemo(function multicount() {
        console.log("called");
        return count * 2
    },[count])
  return (
    <div>
      <h1>Usememo</h1>
      <h2>{count}</h2>
      <h2>{item}</h2>
      {/* <h2>{multicount()}</h2> */}
      <h2>{multicountwithmemo}</h2>
      <button onClick={() =>setCount(count +1)}>Count btn</button>
      <button onClick={() =>setItem(item *5)}>Item btn</button>
    </div>
  )
}

export default Usememo
