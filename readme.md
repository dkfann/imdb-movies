Very simple IMDB Node API for OMDb API from https://www.omdbapi.com/

Can fetch movies, series and episodes by id or title

npm install --save imdb-api

const imdb = require("imdb-api")
or es6 import imdb from "imdb-api"

const movie = new imdb()

// Get by title or id

accepts 3 parameters

```
1. title / id type String
2. season type Int
3. episode type Int
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
