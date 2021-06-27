import axios from "axios";

const getIssLocation = () => {
  return axios.get("http://api.open-notify.org/iss-now.json");
};

export { getIssLocation };
