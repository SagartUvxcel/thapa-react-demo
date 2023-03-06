import React from 'react';
import dateValue from "../Common Data/ConstValueCommon";
import * as all from "../Common Data/ConstValueCommon";
// import {  add, sub, mul, div } from "./ConstValueCommon";

const DateTime = () => {



    // const dateValue = new Date();
    const date = dateValue.toLocaleDateString();
    const showTime = new Date().toLocaleTimeString();
    const getTimeHour = dateValue.getHours();
    let refValue = " ";
    let cssStyle = {}

    if (getTimeHour >= 1 && getTimeHour < 12) {
        refValue = "good morning";
        cssStyle.color = "green";
    } else if (getTimeHour >= 12 && getTimeHour < 19) {
        refValue = "good afternoon";
        cssStyle.color = "Orange";
    } else {
        refValue = "good night";
        cssStyle.color = "Black";
    }

   

    return (
        <>
            {/* current time and date */}
            <div className="text-center my-5">
                <h1>date date is: {date}</h1>
                <h3>date Time is: {showTime}</h3>
            </div>

            {/* as per time value say words */}
            <div className="greetingBox">
                <h1>Hello Sir, <span style={cssStyle}> {refValue}</span></h1>
            </div>

            {/* calculator */}
            <div className="">
                <h1> Addition is:       {all.add(3, 2)}</h1>
                <h1> Subtraction is:    {all.sub(3, 2)}</h1>
                <h1> Multiplication is: {all.mul(3, 2)}</h1>
                <h1> Division is:       {all.div(3, 2)}</h1>
            </div>

          

            {/* Image galaxy */}
            <div className="img_box ">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="1" />
                <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="1" />
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt="1" />
            </div>

        </>
    )
}

export default DateTime