import React from "react";

const Header = ({ issLat, issLon }) => {
  return (
    <>
      <h1>ISS TRACKER</h1>
      <h3>
        lat: {issLat} lon: {issLon}
      </h3>
    </>
  );
};

export default Header;
