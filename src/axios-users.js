import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080"
  // baseURL: "http://3.19.122.178:8080"
});

export default instance;
