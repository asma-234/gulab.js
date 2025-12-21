const axios = require("axios");
const { validationResult } = require("express-validator");
const weatherConfig = require("../config/weatherConfig");

console.log("API KEY:", process.env.OPENWEATHER_API_KEY);


exports.getWeather = async (req, res) => {
  // ✅ Validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }

  const { city } = req.query;

  try {
    const response = await axios.get(weatherConfig.BASE_URL, {
      params: {
        q: city,
        appid: process.env.OPENWEATHER_API_KEY,
        units: "metric"
      }
    });

    // ✅ Clean response
    res.status(200).json({
      success: true,
      data: {
        city: response.data.name,
        temperature: response.data.main.temp,
        weather: response.data.weather[0].description,
        humidity: response.data.main.humidity
      }
    });

  } catch (error) {
  console.log("ERROR STATUS:", error.response?.status);
  console.log("ERROR DATA:", error.response?.data);
  console.log("API KEY:", process.env.OPENWEATHER_API_KEY);

  return res.status(500).json({
    success: false,
    message: "Failed to fetch weather data"
  });
  }


    res.status(500).json({
      success: false,
      message: "Failed to fetch weather data"
    });
  };