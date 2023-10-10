import React, { Component } from 'react'

class Stateliftingsecond extends Component {
    render(){
        return (
            <>
                <h1>State component second</h1>
                <p>{this.props.name}</p>
                <button onClick={()=>this.props.clickone("Welcome to my profile")}>Click</button>
            </>
        )
    }
}
export default Stateliftingsecond