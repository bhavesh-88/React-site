import React, { Component } from 'react'
import Clickcounter from "./Clickcounter"
import Hovercounter from './Hovercounter'

class Classhoc extends Component {
    render(){
        return(
            <>
                <h1>Higher order Component</h1>
                <Clickcounter/>
                <br />
                <br />
                <Hovercounter/>
            </>
        )
    }
}

export default Classhoc