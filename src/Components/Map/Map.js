import React from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "../MapMarker/MapMarker";
import Header from "../Header/Header";
import mapStyle from "../../assets/MapStyles";

const Map = ({ latlon }) => {
  const defaultProps = {
    center: {
      lat: parseFloat(latlon.latitude),
      lng: parseFloat(latlon.longitude),
    },
    zoom: 1,
    styles: mapStyle,
  };
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{
          styles: defaultProps.styles.mapStyle,
          zoomControl: false,
        }}
      >
        <MapMarker lat={latlon.latitude} lng={latlon.longitude} />
      </GoogleMapReact>
      <Header issLat={defaultProps.center.lat} issLon={defaultProps.center.lng}/>
    </div>
  );
};

export default Map;
