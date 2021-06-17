import {React, useState } from 'react';
import axios from 'axios';

const Tracker = () => {
    let [responseData, setResponseData] = useState('')

    const fetchData = (e) => {
        e.preventDefault()

        axios({
            'method':'GET',
            'url':'http://api.open-notify.org/iss-now.json',
        })
        .then((response)=>{
            setResponseData(response.data)
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return (
        <div>

            <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>

            {/* {responseData.dates && responseData.dates.map(date => {
                return <p>{date}</p>
            })} */}
        </div>
    )
}

export default Tracker;