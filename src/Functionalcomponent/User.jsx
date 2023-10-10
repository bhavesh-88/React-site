import React from 'react'

const User = (props) => {
  React.useEffect(()=>{
    // alert("UeeEffect")
    console.log("effect");
},[props.count])
  return (
    <div>
      <h1>User </h1>
      <h3>{props.count}</h3>
      <h3>{props.data}</h3>
      {/* <h2>My name is {props.name} and email id is {props.email} </h2> */}
    </div>
  )
}

export default User
