require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/vacancies", require("./routes/api/vacancies"));
app.use("/api/admin", require("./routes/api/admin"));

module.exports = app;
