import {React, useState } from 'react';
import {getIssLocation} from '../../API/api';

const Tracker = () => {
    let [issPosition, setIssPosition] = useState('')

    const fetchData = (e) => {
        e.preventDefault()

        getIssLocation()
        .then((response)=>{
            setIssPosition(response.data.data);
            console.log(response);
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