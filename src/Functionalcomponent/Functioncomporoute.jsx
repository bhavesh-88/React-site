import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Functioncompomenu from './Functioncompomenu'
import Functioncompointro from './Functioncompointro'
import Usestate from './01Usestate'
import Functioncompoprops from './04Functioncompoprops'
import UseEffect from './05UseEffect'
import Uselayouteffect from './06Uselayouteffect'
import Usememo from './07Usememo'
import Usecallback from './08Usecallback'
import Usecontextone from './10Usecontextone'
import Usecontexthook from './11Usecontexthook'
import UseReducer from './12UseReducer'
import Useref from './13Useref'
import API from './14API'
import APIPOST from './15APIPOST'
import Customhook from './18Customhook'
import Crud from './20Crud'

const Functioncomporoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Functioncompomenu/>}>
            <Route path='functioncompointro' element={<Functioncompointro/>}/>
            <Route path='usestate' element={<Usestate/>}/>
            <Route path='functionprop' element={<Functioncompoprops/>}/>
            <Route path='useeffect' element={<UseEffect/>}/>
            <Route path='uselayouteffect' element={<Uselayouteffect/>}/>
            <Route path='usememo' element={<Usememo/>}/>
            <Route path='usecallback' element={<Usecallback/>}/>
            <Route path='usecontext' element={<Usecontextone/>}/>
            <Route path='usecontexthook' element={<Usecontexthook/>}/>
            <Route path='usereducer' element={<UseReducer/>}/>
            <Route path='useref' element={<Useref/>}/>
            <Route path='api' element={<API/>}/>
            <Route path='apipost' element={<APIPOST/>}/>
            <Route path='customhook' element={<Customhook/>}/>
            <Route path='crud' element={<Crud/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default Functioncomporoute
