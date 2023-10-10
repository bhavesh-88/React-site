import React, { useState, useEffect } from 'react'

const APIPOST = () => {
    const [name, setName] = useState("")
    const [rollno, setRollno] = useState(101)
    const [qualification, setQualification] = useState("")
    const [address, setAddress] = useState("")
    const [user, setUser] = useState([])
    const [st, setSt] = useState(false)

    const savedata = ()=> {
        // console.log(name,rollno,qualification,address);
        console.log({ name, rollno, qualification, address });
        let data = { name, rollno, qualification, address }

        fetch("http://localhost:5000/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result)
            result.json().then((resp) => {
                console.log(resp);
            })
        })
        setName("");
        setRollno("");
        setQualification("");
        setAddress("")
        setSt(true)
    }

    useEffect(() => {
        fetch("http://localhost:5000/students").then((data) => {
            data.json().then((resp) => {
                console.log(resp);
                setUser(resp)
            })
        })
    },[st])
    return (
        <>
            <h1>API POST</h1>

            <table  width="100%" align="center">
                <tr>
                    <td>Student Name</td>
                    <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter your name" /></td>
                </tr>
                <tr>
                    <td>Roll No</td>
                    <td><input type="number" value={rollno} onChange={(e) => setRollno(e.target.value)} placeholder='enter your roll no' /></td>
                </tr>
                <tr>
                    <td>Qualification</td>
                    <td><input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} placeholder='enter your qualification' /></td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td><input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='enter your address' /></td>
                </tr>
                <button onClick={savedata}>Submit</button>
            </table>
            <br />
            <br />
            <br />
            <table border="2px" width="100%" align="center">
                <tr border="2px">
                    <td>id</td>
                    <td>Student Name</td>
                    <td>RollNo</td>
                    <td>Qualification</td>
                    <td>Addresss</td>
                </tr>
                {
                    user.map((item) =>
                        <tr border="2px">
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.rollno}</td>
                            <td>{item.qualification}</td>
                            <td>{item.address}</td>
                        </tr>
                    )
                }
            </table>
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default APIPOST
