import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./CSS.css"
import { serverUrl } from '../Common Data/ConstValueCommon';

const FetchDataTableRendering = () => {
    const [covidDataValue, setCovidDataValue] = useState([])

    const fetchCovidData = async () => {
        const covidData = await axios.get(serverUrl).then((res) => {
            setCovidDataValue(res.data.statewise);
        })
    }

    useEffect(() => {
        fetchCovidData();
    }, [])
    console.log(covidDataValue);
    return (
        <div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sr.No.</th>
                        <th scope="col">State</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Deaths</th>
                        <th scope="col">Active</th>
                        <th scope="col">Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {covidDataValue.map((data, index) => (
                        <tr key={index}>
                            <th scope="col">{index}</th>
                            <th scope="col">{data.state}</th>
                            <th scope="col">{data.confirmed}</th>
                            <th scope="col">{data.recovered}</th>
                            <th scope="col">{data.deaths}</th>
                            <th scope="col">{data.active}</th>
                            <th scope="col">{data.lastupdatedtime}</th>
                        </tr>
                   ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default FetchDataTableRendering