import axios from "axios";

const getIssLocation = () => {
  return axios.get("https://api.wheretheiss.at/v1/satellites/25544");
};

export { getIssLocation };
