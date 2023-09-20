import axios from "axios";
import { api_url } from "../data/config";

const Axios = axios.create({
  baseURL: api_url,
});

export default Axios;
