import { React, useState, useEffect } from "react";
import { getIssLocation } from "../../API/api";
import Map from "../../Components/Map/Map";

const Tracker = () => {
  let [issPosition, setIssPosition] = useState("");
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 50000);
    return () => clearInterval(interval);
  })
  
  const fetchData = () => {

    getIssLocation()
      .then((response) => {
        setIssPosition(response.data);
        console.log(issPosition);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <Map />
    </div>
  );
};

export default Tracker;
