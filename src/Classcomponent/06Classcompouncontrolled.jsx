import React, { Component } from 'react'


class Classcompouncontrolled extends Component {
    constructor() {
        super();
        this.inputref = React.createRef()
    }
    login = (e) =>{
        e.preventDefault();
        console.log("Login")
        console.log(this.inputref.current.value);
    }
    render() {
        return (
            <>
            <form onSubmit={(e)=>{this.login(e)}}>
                <input ref={this.inputref}></input>
                <input type='submit' value="login"></input>
            </form>
            </>
        )
    }
}

export default Classcompouncontrolled