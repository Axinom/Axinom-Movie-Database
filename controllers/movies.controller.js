var MoviesService = require('../services/movies.service');

exports.createMovie = async function (req, res, next) {
    try {

        var users = await MoviesService.createMovie(req.body);

        return res.status(200).json({ status: 200, data: users, message: "Successfully movie created" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.getMovies = async function (req, res, next) {

    try {
        var users = await MoviesService.getMovies();

        return res.status(200).json({ status: 200, data: users, message: "Successfully movies Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.getMovie = async function (req, res, next) {

    try {
        var users = await MoviesService.getMovie(req.params.id);

        return res.status(200).json({ status: 200, data: users, message: "Successfully movies retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.deleteMovie = async function (req, res, next) {

    try {
        var movie = await MoviesService.deleteMovie({_id:req.params.id});

        return res.status(200).json({ status: 200, data: movie, message: "Successfully movie deleted" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.updateMovie = async function (req, res, next) {
    try {
        replacedMovie = await MoviesService.updateMovie(req.params.id, req.body);


        return res.status(200).json({ status: 200, data: replacedMovie, message: "Successfully movie updated" });
    } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });
    }

};

exports.replaceMovie = async function (req, res, next) {
    try {
        replacedMovie = await MoviesService.replaceMovie(req.params.id, req.body);


        return res.status(200).json({ status: 200, data: replacedMovie, message: "Successfully Movies Retrieved" });
    } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });
    }

};