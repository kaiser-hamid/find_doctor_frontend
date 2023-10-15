import axios from "axios";
import data from "../data/config";

const Axios = axios.create({
  baseURL: data.api_url,
});

export default Axios;
