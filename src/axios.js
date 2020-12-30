import axios from "axios";

const instance = axios.create({
  baseURL: "https://tcl-backend.herokuapp.com",
});

export default instance;
//http://localhost:8001