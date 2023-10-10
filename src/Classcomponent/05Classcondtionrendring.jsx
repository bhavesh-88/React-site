import React, { Component } from 'react'


class Classconditionrendring extends Component {
    constructor() {
        super();
        this.state = {
            isloging  : false,
        }
    }
    render() {

        // if (this.state.isloging) {
        //     return<><div>Welcome my Profile</div></>
        // }
        // else{
        //     return<><div>Welcome my Profile as guest</div></>
        // }


        // let msg;
        // if (this.state.isloging) {
        //     msg = <><div>Welcome my Profile</div></>
        // }
        // else{
        //     msg = <><div>Welcome my Profile as guest</div></>
        // }
        // return msg;


        // return this.state.isloging ? 
        // <div>Welcome my Profile</div>:
        // <div>Welcome my Profile as guest</div>;


        // only recive true value than we use &&
        return this.state.isloging && 
        <div>Welcome my Profile</div>;

        
        // return (
        //     <>
        //     <h2>Conditionaly rendring</h2>
        //     </>
        // )
    }
}

export default Classconditionrendring