import axios from "axios";

const instance = axios.create({
  baseURL: "localhost:8080"
});

export default instance;
