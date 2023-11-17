import axios from "axios";

const http = axios.create();
http.defaults.baseURL = process.env.REACT_APP_SERVER_BASEURL;
http.defaults.withCredentials = true;

console.log(http.defaults.baseURL);
const accessToken = localStorage.getItem("access");
http.defaults.headers.common["Authorization"] = accessToken
  ? accessToken
  : null;

export default http;
