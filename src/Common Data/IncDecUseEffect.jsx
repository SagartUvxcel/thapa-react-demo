import React, { useState, useEffect } from 'react'

const IncDecUseEffect = () => {
    const [first, setFirst] = useState(0);
    const [num1, setNum1] = useState(0);

    useEffect(() => {
        document.title=`you clicked me ${num1} times`;
    }, [num1]);

    return (
        <div className='m-5'>
            <button onClick={() => setFirst(first + 1)}>Click {first}</button>
            <br />
            <hr></hr>
            <button onClick={() => setNum1(num1 + 1)}>Click {num1}</button>


        </div>
    )
}

export default IncDecUseEffect