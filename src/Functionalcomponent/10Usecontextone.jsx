import React, { createContext } from 'react'
import CompA from './CompA'

const Fname = createContext()
const Usecontextone = () => {
    return (
        <>
            <h1>Usecontext</h1>
            <Fname.Provider value="Rajveer">
                <CompA />
            </Fname.Provider>
        </>
    )
}

export default Usecontextone
export {Fname}
