import React, { Component } from 'react'


class Classcompocontrolled extends Component {
    constructor() {
        super();
        this.state = {
            name : ""
        }
    }
    login = (e) =>{
        e.preventDefault();
        console.log("Login")
        console.log(this.state.name);
    }
    render() {
        return (
            <>
            <form onSubmit={(e)=>{this.login(e)}}>
                <input value={this.state.name} onChange={(e)=>{this.setState({name : e.target.value})}}></input>
                <input type='submit' value="login"></input>
            </form>
            </>
        )
    }
}

export default Classcompocontrolled