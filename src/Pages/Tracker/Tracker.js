import {React, useState } from 'react';
import axios from 'axios';

const Tracker = () => {
    let [issPosition, setIssPosition] = useState('')

    const fetchData = (e) => {
        e.preventDefault()

        axios({
            'method':'GET',
            'url':'http://api.open-notify.org/iss-now.json',
        })
        .then((response)=>{
            setIssPosition(response.data.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>
        </div>
    )
}

export default Tracker;