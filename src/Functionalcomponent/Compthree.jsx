import React, { useContext } from 'react'
import { Fname } from './11Usecontexthook'

const Compthree = () => {

   const name = useContext(Fname)
   const {id,email} = name
  return (
    <div>
      <h1>{email} UseContexthook{id}</h1>
    </div>
  )
}

export default Compthree
