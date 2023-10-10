import React, { createContext } from 'react'
import Compone from './Compone'

const Fname = createContext()
const Usecontexthook = () => {
    const name = "Manav"
    const data = {
        id:1,
        email:"bhavesh@gamil.com"
    }
  return (
    <div>
        <Fname.Provider  value={data}>
            <Compone/>
        </Fname.Provider>
    </div>
  )
}

export default Usecontexthook
export {Fname}
