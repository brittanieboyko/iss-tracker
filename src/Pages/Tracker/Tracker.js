import { React, useState, useEffect } from "react";
import { getIssLocation } from "../../API/api";

const Tracker = () => {
  let [issPosition, setIssPosition] = useState("");
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
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
      <h1>ISS TRACKER</h1>
    </div>
  );
};

export default Tracker;
