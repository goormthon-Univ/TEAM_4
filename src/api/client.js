import axios from "axios";

const http = axios.create();
http.defaults.baseURL = process.env.REACT_APP_SERVER_BASEURL;
http.defaults.withCredentials = true;

const accessToken = localStorage.getItem("access");
http.defaults.headers.common["Authorization"] = accessToken
  ? "Bearer " + accessToken
  : null;

export default http;
