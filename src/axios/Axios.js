import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.API_URL,
});

export default Axios;
