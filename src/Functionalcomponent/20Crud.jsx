import React,{useState} from 'react'

const Crud = () => {
    const [name, setName] = useState("")
    const [alldata, setAlldata] = useState([])
    const [show, setShow] = useState(false)
    const [edittext, setEdittext] = useState("")

    // Add function
    const handleadd = () => {
        // console.log("handle add");
        // console.log(name);

        if (name.length !== 0) {

            setAlldata(newData => [...newData, name])
            setName("")
        }
    }
    // Delete function
    const handledel = (index) => {
        // for delete data we use splice method
        alldata.splice(index, 1)
        setAlldata([...alldata])
    }

    // Edit function
    const handleedit = (i) => {
        setName(alldata[i])

        //Click on edit, show update button
        setShow(true)

        // print edited data
        setEdittext(i)
    }

    // Update function
    const handleupdate = () => {
        alldata.splice(edittext, 1, name)
        setAlldata([...alldata])
        setName("")
        setShow(false)

    }
    console.log(alldata);
    return (
        <>
            <div className='text-center' >

                <input className='m-2 p-3' type="text" value={name} name="" id="" onChange={(e) => setName(e.target.value)} />
                {!show ? <button className='m-2 p-4 btn btn-success' onClick={handleadd}>Add-Item</button> :
                    <button className='m-2 p-4 btn btn-success' onClick={handleupdate}>Update-Item</button>}
            </div>
            {
                alldata.map((data, i) =>
                    <div className='text-center'>
                        <table className='text-center w-100 '>
                            <tr>
                                <td className='border'><h1 className='fw-bold fst-italic text-decoration-underline'>{data}</h1></td>
                                <td className='border w-25  '><button className='m-1 btn btn-info' onClick={() => handleedit(i)}>Edit</button></td>
                                <td className='border w-25  '><button className='m-1 btn btn-info' onClick={() => handledel(i)}>Delete</button></td>
                            </tr>
                        </table>
                    </div>

                )
            }
        </>
    )
}

export default Crud
