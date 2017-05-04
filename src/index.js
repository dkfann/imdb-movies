const imdb = require('./imdb-movies.js')

const movie = new imdb();

// movie.getByTitle("The Sopranos", 1);
movie.getById("tt0141842", 1);
