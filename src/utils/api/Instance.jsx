import axios from "axios";

const Instance = axios.create({
  baseURL: "http://localhost:8000/",
});

export default Instance;
