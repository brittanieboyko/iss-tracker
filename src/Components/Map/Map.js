import React from "react";

const Map = () => {

    // const initMap = () => {
    //     let map;
    //     map = new google.maps.Map(document.getElementById("map"), {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8,
    // });
    // }
    console.log(process.env.REACT_APP_GOOGLE_API);

  return (
    <div>
      <h1>Map</h1>
    </div>
  );
};

export default Map;
