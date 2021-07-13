import React from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "../MapMarker/MapMarker";

const Map = ({ latlon }) => {
  const defaultProps = {
    center: {
      lat: parseFloat(latlon.latitude) || 0,
      lng: parseFloat(latlon.longitude) || 0,
    },
    zoom: 3,
  };

  return (
    <div style={{ height: "90vh", width: "90%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapMarker
          lat={latlon.latitude}
          lng={latlon.longitude}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
