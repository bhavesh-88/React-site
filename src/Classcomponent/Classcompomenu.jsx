import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

class Classcompomenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="classcompointro">INTRO</Link></li>
                    <li><Link to="classcompoprops">CLASS PROPS</Link></li>
                    <li><Link to="classcompostate">CLASS STATE</Link></li>
                    <li><Link to="classcompolife">CLASS LIFE</Link></li>
                    <li><Link to="classconditionrender">CLASS CONDITION RENDERING</Link></li>
                    <li><Link to="classcompouncontrolled">CLASS UNCONTROLLED</Link></li>
                    <li><Link to="classcompocontrolled">CLASS CONTROLLED</Link></li>
                    <li><Link to="classlistandkeys">CLASS LISTANDKEYS</Link></li>
                    <li><Link to="stateliftingone">STATE LIFTING ONE</Link></li>
                    <li><Link to="classcompositionandinheritance">CLASSCOMPOSITIONANDINHERITANCE</Link></li>
                    <li><Link to="classhoc">CLASS HOC</Link></li>
                </ul>

                <Outlet/>
            </>
        )
    }
}

export default Classcompomenu