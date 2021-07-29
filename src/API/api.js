import axios from "axios";

const getIssLocation = () => {
  return axios.get("http://api.open-notify.org/iss-now.json");
};
const getIssLocationSecure = () => {
  return axios.get("https://api.wheretheiss.at/v1/satellites/25544");
};

export { getIssLocation, getIssLocationSecure };
