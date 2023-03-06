import React, { useState } from 'react';
import DataListShowHide from "./DataListShowHide";

const dataValue = [
    {
        id: 1,
        questions: "What is an API?",
        answer: "API testing provides access to the application without a user interface."
    },
    {
        id: 2,
        questions: "Differences between API and Web Service?",
        answer: "All Web services are APIs but not all APIs are Web services.."
    },
    {
        id: 3,
        questions: "What are some architectural styles for creating a Web API?",
        answer: "HTTP for client-server communication."
    },
    {
        id: 4,
        questions: "Who can use a Web API?",
        answer: "Web API can be consumed by any clients."
    },
]

const ShowHideButton = () => {

    const [data, setData] = useState(dataValue);

    console.log(data);
    return (
        <div>
            <section className="mt-5 text-center">
                <div>
                    <h1>Hello Boss</h1>

                </div>
                <div className=" d-flex justify-content-center ">
                    <div>
                    {data.map((data)=>{
                        const {id}=data;
                        return <DataListShowHide key={id} {...data}/>
                    })}
                        
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ShowHideButton