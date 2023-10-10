import React, { Component } from 'react'


class Classcompostate extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            name:"name"
        }
    }

    Increment = () =>{
        this.setState({count: this.state.count+1})
        this.setState({name: this.state.name = "bhavesh"})
        console.log("hu");
    }
    Decrement = () =>{
        this.setState({count: this.state.count-1})

    }
    render() {
        return (
            <>
                <h1>state</h1>
                <h1>{this.state.count}</h1>
                <h1>{this.state.name}</h1>
                <button onClick={this.Increment}>increment</button>
                <button onClick={this.Decrement}>Decrement</button>
            </>
        )
    }
}

export default Classcompostate