const imdb = require('./imdb.js')

const movie = new imdb();

// movie.getByTitle("The Sopranos", 1);
movie.getById("tt0141842", 1);