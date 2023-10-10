import React from 'react'
import { Fname } from './10Usecontextone'

const CompC = (props) => {
    return (
        <>
            <h1>UseContextOne</h1>
            <Fname.Consumer>
                {
                    value =>{
                        return <h1>Hello {value}</h1>
                    }
                }
            </Fname.Consumer>
        </>
    )
}

export default CompC
