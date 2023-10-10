import React, { Component } from 'react'
import Stateliftingsecond from './Stateliftingsecond'

class Stateliftingone extends Component {
    constructor(props) {
        super(props)
        this.state= props
    }
    clickedone = (data) =>{
        console.log("clicked " + data)
        this.setState({
            data : data
        })
    }
    render(){
        return (
            <>
                <h1>State component one</h1>
                <Stateliftingsecond clickone = {this.clickedone} name="bhabesh"/>
            </>
        )
    }
}
export default Stateliftingone