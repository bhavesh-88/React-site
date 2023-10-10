import React, { Component } from "react";

class Classcompopropexp extends Component {
    render() {
        return (
            <>
            {/* <h1>hy</h1> */}
            <h1>{this.props.name}</h1>
            <h1>{this.props.email}</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* composition */}
            <div>{this.props.children}</div>
            </>
        )
    }
}

export default Classcompopropexp;