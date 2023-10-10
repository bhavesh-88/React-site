import React, { useEffect, useState } from "react";

const API = () => {

    const [user, setUser] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{
            data.json().then((resp)=>{
                console.log(resp);
                setUser(resp)
            })
        })
    })
    return ( 
        <>
        <h1>Application Programming Interface</h1>
        <table border="2px" width="100%" align="center">
            <tr border="2px">
                <td>userId</td>
                <td>id</td>
                <td>title</td>
                <td>completed</td>
            </tr>
            {
                user.map((item)=>
                    <tr border="2px">
                    <td>{item.userId}</td>
                    <td>{item.id}</td> 
                    <td>{item.title}</td>
                    {/* <td>{item.completed ? "true" : "false"}</td> */}
                    <td>{item.completed.toString()}</td>
                </tr>
                )
            }
        </table>
        </>
     );
}
 
export default API;