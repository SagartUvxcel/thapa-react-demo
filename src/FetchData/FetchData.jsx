import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as all from "../Common Data/ConstValueCommon"
// import dateValue, { serverUrl } from "../DateTime/ConstValueCommon"

const FetchData = () => {
    const [data, setData] = useState([]);

    const uploadData = async () => {

        try {
            // using axios
            const res = await axios.get(`${all.serverUrl}`)
                .then((res) => {
                    setData(res.data.statewise[0]);
                });
            console.log(res);

            // using fetch
            // const resp = await fetch("https://data.covid19india.org/data.json")
            //     const dataFetch= await resp.json();
            // console.log(dataFetch.statewise[0]);

        } catch (error) {
            console.log(error);
        }

        // const getData = await res.json();
    }
    // console.log(data);

    useEffect(() => {
        uploadData();
    }, [])

    return (
        <>
            <section className=" m-5">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card bg-primary">
                            <div className="card-body">
                                <h4 className="card-title">country</h4>
                                <h3 className="card-text">India</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-success">
                            <div className="card-body">
                                <h4 className="card-title">recovered</h4>
                                <h3 className="card-text">{data.recovered}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-warning">
                            <div className="card-body">
                                <h4 className="card-title">confirmed</h4>
                                <h3 className="card-text">{data.confirmed}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-danger">
                            <div className="card-body">
                                <h4 className="card-title">deaths</h4>
                                <h3 className="card-text">{data.deaths}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-info">
                            <div className="card-body">
                                <h4 className="card-title">active</h4>
                                <h3 className="card-text">{data.active}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">updated time</h4>
                                <h3 className="card-text">{data.lastupdatedtime}</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default FetchData