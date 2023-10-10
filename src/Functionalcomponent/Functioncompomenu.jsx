import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Functioncompomenu = () => {
  return (
    <>
      <div className='row my-3'>
        <div className='col-md-6'>

        </div>
        <div className='col-md-6'>
          <ul>
            <li><Link to="functioncompointro">INTRO</Link></li>
            <li><Link to="usestate">UseState</Link></li>
            <li><Link to="functionprop">FunctionProps</Link></li>
            <li><Link to="useeffect">UseEffect</Link></li>
            <li><Link to="uselayouteffect">UseLayoutEffect</Link></li>
            <li><Link to="usememo">Usememo</Link></li>
            <li><Link to="usecallback">UseCallback</Link></li>
            <li><Link to="usecontext">UseContextOne</Link></li>
            <li><Link to="usecontexthook">UseContextHook</Link></li>
            <li><Link to="usereducer">UseReducer</Link></li>
            <li><Link to="useref">UseRef</Link></li>
            <li><Link to="api">API</Link></li>
            <li><Link to="apipost">APIPOST</Link></li>
            <li><Link to="customhook">CUSTOMHOOK</Link></li>
            <li><Link to="crud">CRUD</Link></li>
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Functioncompomenu
