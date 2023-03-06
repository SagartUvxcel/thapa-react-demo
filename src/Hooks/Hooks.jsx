import React, { useState, useEffect } from 'react';
import FormTest from "./FormTest";

const Hooks = () => {


    // hooks

    const [count, setCount] = useState(0);
    const [time, setTime] = useState();
    const [updateText, setUpdateText] = useState("Click me");


    const incNum = () => {
        setCount(count + 1)
    }
    const updateTime = () => {
        setTime(new Date().toLocaleTimeString())

    }
    setInterval(() => {
        updateTime();
    }, 1000);

const textUpdated=()=>{
    setUpdateText("Clicked")
}

    useEffect(() => {
        setTime(new Date().toLocaleTimeString())
    }, [])


    return (
        <div className='my-5'>
            <div className="text-center">
                <h1>{time}</h1>
                <h1>{count}</h1>
                <button onClick={incNum}>{updateText}</button>
                <button onClick={textUpdated}>{updateText}</button>

            </div>

            <FormTest/>




        </div>
    )
}

export default Hooks