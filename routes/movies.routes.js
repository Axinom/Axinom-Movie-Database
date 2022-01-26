const express = require("express");
const Movie = require("../models/Movie");
const movieController = require("../controllers/movies.controller");
const { AuthenticateUser } = require("../authenticator");
const router = express.Router();


router.post("/movies", AuthenticateUser, movieController.createMovie);
router.get("/movies", AuthenticateUser, movieController.getMovies);
router.get("/movies/:id", AuthenticateUser, movieController.getMovie);
router.patch("/movies/:id", AuthenticateUser, movieController.updateMovie);
router.delete("/movies/:id", AuthenticateUser, movieController.deleteMovie);
router.put("/movies/:id", AuthenticateUser, movieController.replaceMovie);


module.exports = router;