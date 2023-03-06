import React, { useState } from 'react'

const DataListShowHide = ({ questions, answer }) => {
    const [show, setShow]=useState(false);
    return (
        <section className='border bg-info'>
            <div className='d-flex  text-center p-2 align-items-center '>
                <button className='me-3 btn btn-danger fs-6 ' onClick={()=>setShow(!show)}>{show?"-":"+"} </button>{" "}
                <h3 className=''>  {questions}</h3>
            </div>
            <div className='text-start'>
                {show && <h6 className='ps-5'>{answer}</h6>}
            </div>
        </section>
    )
}

export default DataListShowHide