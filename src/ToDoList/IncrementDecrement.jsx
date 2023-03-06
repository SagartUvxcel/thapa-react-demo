import React, { useState } from 'react'
const numberValue = 0;
const IncrementDecrement = () => {
    const [number, setNumber] = useState(numberValue);

    const incrementFunction = () => {
        let increase = number + 1;
        setNumber(increase);
    }
      const decrementFunction = () => {
        let increase = number - 1;
        if(number !== 0){
            setNumber(increase);
        }else{
            setNumber(number)
            alert("we cannot decrement more ");
        }
    }


    return (
        <div className='text-center '>
            <div className=" m-5 text-center border p-5">
                <div className="my-5">
                    <p>{number}</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 text-end">
                        <button className="btn btn-primary" onClick={incrementFunction}>Increment</button>
                    </div>
                    <div className="col-md-4 text-start">
                        <button className="btn btn-primary" onClick={decrementFunction}>Decrement</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default IncrementDecrement