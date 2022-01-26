const express = require("express");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movies.routes");
const userRoutes = require("./routes/users.routes");
const { url } = require("./config/db.config");
require("dotenv").config();

mongoose
  .connect(url)
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", movieRoutes);
    app.use("/auth", userRoutes);

    const PORT = process.env.NODE_DOCKER_PORT || 8080;
    app.listen(PORT, () => {
      console.log("Server has started!");
    });
  });
