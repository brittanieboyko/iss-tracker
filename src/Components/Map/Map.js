import React from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "../MapMarker/MapMarker";
import mapStyle from "../../assets/MapStyles";

const Map = ({ latlon }) => {
  const defaultProps = {
    center: {
      lat: parseFloat(latlon.latitude) || 0,
      lng: parseFloat(latlon.longitude) || 0,
    },
    zoom: 3,
    styles: mapStyle,
  };
  console.log(defaultProps.styles.mapStyle);
  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{
          styles: defaultProps.styles.mapStyle,
        }}
      >
        <MapMarker lat={latlon.latitude} lng={latlon.longitude} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
