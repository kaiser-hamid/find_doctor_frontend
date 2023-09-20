import Axios from "./Axios";

export const fetchHomePageData = async () => {
  return await Axios.get("init-home-page");
};
