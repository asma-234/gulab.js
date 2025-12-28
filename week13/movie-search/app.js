require("dotenv").config();
const express = require("express");
const path = require("path");

const movieRoutes = require("./routes/movieRoutes");

const app = express();

app.use(express.json());

// ✅ Serve frontend
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/movies", movieRoutes);

// Default error route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
