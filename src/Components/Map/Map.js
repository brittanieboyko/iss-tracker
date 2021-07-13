import React from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "../MapMarker/MapMarker"

const Map = ({ latlon }) => {
  console.log("map", latlon);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapMarker lat={latlon.latitude} lng={latlon.longitude} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
