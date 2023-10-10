import React, { Component } from 'react'


class Hovercounter extends Component {
    constructor() {
        super()
        this.state = {
            count : 0
        }
    }
    increment = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
    render(){
        return(
            <>
                <h1>Hover Counter</h1>
                <h3 onMouseEnter={()=>this.increment()}>{this.state.count}</h3>
            </>
        )
    }
}

export default Hovercounter