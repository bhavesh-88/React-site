import React, { Component } from 'react'
import Classcompopropexp from './Classcompopropexp'
import Classcompointro from './01Classcompointro'


class Classcompositionandinheritance extends Component {
    render(){
        return(
            <>
                <h1>Classcompositionandinheritance</h1>

                {/* this called composition */}
                <Classcompopropexp name="hello">
                    <h1>bhavesh</h1>
                    <h1>composition</h1>
                    <Classcompointro/>
                </Classcompopropexp>
            </>
        )
    }
}

export default Classcompositionandinheritance