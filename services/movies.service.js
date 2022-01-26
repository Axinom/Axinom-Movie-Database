const Movie = require('../models/Movie');

exports.getMovies = async function (query) {

    try {
        var movies = await Movie.find();

        return movies;
    } catch (e) {

        throw Error('Error while Paginating Users');
    }
};

exports.getMovie = async function (query) {

    try {
        var movies = await Movie.findById(query);

        return movies;
    } catch (e) {

        throw Error('Error while Paginating Users');
    }
};

exports.createMovie = async function (query) {

    try {
        const movie = new Movie({
            title: req.body.title,
            description: req.body.description,
            thumbnail: req.body.thumbnail,
            releaseDate: req.body.releaseDate
        });
        await movie.save();
        return movie;
    } catch (e) {

        throw Error(`Error creating movie ${e}`);
    }
};

exports.updateMovie = async function (id, update) {

    try {
        var movie = await Movie.findByIdAndUpdate(id, update);

        return movie;
    } catch (e) {

        throw Error(`Error updating movies ${e}`);
    }
};

exports.deleteMovie = async function (query) {

    try {
        var movies = await Movie.findOneAndDelete(query);

        return movies;
    } catch (e) {

        throw Error(`Error deleting the movie ${e}`);
    }
};

exports.replaceMovie = async function (id, update) {

    try {
        var movies = await Movie.findOneAndReplace({ _id: id }, update);

        return movies;
    } catch (e) {
        console.log(e);
        throw Error(`Error replacing the movie ${e}`);
    }
};