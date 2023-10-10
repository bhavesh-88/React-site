import React, { Component } from 'react'

class Classlistandkeys extends Component {
    constructor() {
        super();
        this.state = {
            item : [1,2,3,4,5]
        }
    }

    add = () =>{
        console.log("this");
        this.setState({
            item : [3,1,2,3,4,5]
        })
    }

    render() {
        // const list = [1,2,3,4,5]
        // const listitem = list.map((item)=>{ return <li>{item}</li>})
        const listitem = this.state.item.map((item)=>{ return <li key={item.toString()}>{item}</li>})
        return (
            <>
                <ul>
                    {listitem}
                    {/* <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li> */}
                </ul>
                <button onClick={()=> this.add()}>Click me</button>
            </>
        )
    }
}

export default Classlistandkeys