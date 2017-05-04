# Very simple await async IMDB Node API for OMDb API from [here](https://www.omdbapi.com/)

Can fetch movies, series and episodes by id or title

```
npm install --save imdb-movies or npm i -S imdb-movies
```

```
const imdbMovies = require("imdb-movies")
or es6 import imdbMovies from "imdb-movies"

const movie = new imdbMovies()
```

## Get by title or id

### accepts 3 parameters

```
1. title / id type String | required
2. season type Int | optional
3. episode type Int | optional
```

```
movie.getByTitle("The Sopranos"); -> returns movie object

movie.getById("tt0141842", 1, 2); -> returns episode object

movie.getById("tt0141842", 1); -> returns following object

{
	Title: 'The Sopranos',
	Season: '1',
	totalSeasons: '6',
	Episodes: []
}
```
