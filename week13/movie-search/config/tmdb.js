const axios = require("axios");

const tmdbClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5000,
});

module.exports = tmdbClient;
