// const env = "local";
const env = "production";

let data = {
  api_url: "http://localhost:3000/api/",
  app_url: "http://localhost:3000/",
  base_url: "http://localhost:5000/",
};

if (env === "production") {
  data = {
    api_url: "https://api.sasthobondhu.com/api/",
    app_url: "https://api.sasthobondhu.com/",
    base_url: "https://sasthobondhu.com/",
  };
}

export default data;
