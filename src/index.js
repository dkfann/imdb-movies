const imdbMovies = require('./imdb-movies.js')

const movie = new imdbMovies();

// movie.getByTitle("The Sopranos", 1);
movie.getById("tt0141842");
