import React from 'react'
import { useState } from 'react'

const FormTest = () => {

    const [fullName, setFullName] = useState({ fname: "", lname: "" });

    const handleChange = (e) => {
        const {
            name,
            value
        } = e.target
        setFullName({ ...fullName, [name]: value })
    }

    console.log();
    const submitValue = (e) => {
        e.preventDefault();
        console.log(fullName);
    }
    return (
        <div className='section my-5'>
            <div className="text-center">
                <form action="">
                    <h1> Hello {fullName.fname} {fullName.lname}</h1>
                    <input
                        type="text"
                        className='border'
                        name='fname'
                        onChange={handleChange}
                        value={fullName.fname} />
                    <input
                        type="text"
                        className='border'
                        name='lname'
                        onChange={handleChange}
                        value={fullName.lname} />
                    <hr />
                    <button className="border p-2" onClick={submitValue}> Click Me</button>
                </form>
            </div>
        </div>
    )
}

export default FormTest