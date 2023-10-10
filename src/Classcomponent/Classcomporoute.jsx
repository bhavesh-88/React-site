import React, { Component } from 'react'
import { Routes,Route } from 'react-router-dom'
import Classcompomenu from './Classcompomenu'
import Classcompointro from './01Classcompointro'
import Classcompoprops from './02Classcompoprops'
import Classcompostate from './03Classcompostate'
import Classsatelife from './04Classstatelife'
import Classconditionrendring from './05Classcondtionrendring'
import Classcompouncontrolled from './06Classcompouncontrolled'
import Classcompocontrolled from './07Classcompocontrolled'
import Classlistandkeys from './08Classlistandkeys'
import Stateliftingone from './Statelifting/Stateliftingone'
import Classcompositionandinheritance from './09Classcompositionandinheritance'
import Classhoc from './HOC/Classhoc'

class Classcomporoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Classcompomenu/>}>
                        <Route path='classcompointro' element={<Classcompointro/>}/>
                        <Route path='classcompoprops' element={<Classcompoprops/>}/>
                        <Route path='classcompostate' element={<Classcompostate/>}/>
                        <Route path='classcompolife' element={<Classsatelife/>}/>
                        <Route path='classconditionrender' element={<Classconditionrendring/>}/>
                        <Route path='classcompouncontrolled' element={<Classcompouncontrolled/>}/>
                        <Route path='classcompocontrolled' element={<Classcompocontrolled/>}/>
                        <Route path='classlistandkeys' element={<Classlistandkeys/>}/>
                        <Route path='stateliftingone' element={<Stateliftingone/>}/>
                        <Route path='classcompositionandinheritance' element={<Classcompositionandinheritance/>}/>
                        <Route path='classhoc' element={<Classhoc/>}/>
                    </Route>
                </Routes>
                
            </>
        )
    }
}

export default Classcomporoute