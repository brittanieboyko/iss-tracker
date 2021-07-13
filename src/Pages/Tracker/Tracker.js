import { React, useState, useEffect } from "react";
import { getIssLocation } from "../../API/api";
import Map from "../../Components/Map/Map";

const Tracker = () => {
  let [issPosition, setIssPosition] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  });

  const fetchData = () => {
    getIssLocation()
      .then((response) => {
        setIssPosition(response.data.iss_position);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <Map latlon={issPosition} />;
};

export default Tracker;
