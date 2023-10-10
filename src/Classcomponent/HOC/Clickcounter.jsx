import React, { Component } from 'react'
import Updatecounter from './Hoc'


class Classcounter extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         count : 0
    //     }
    // }
    // increment = () =>{
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }
    render(){
        const {count,increment} = this.props
        return(
            <>
                <h1>Click Counter</h1>
                <button onClick={increment}>{this.props.name} {count}</button>
            </>
        )
    }
}

// export default Classcounter
export default Updatecounter(Classcounter)