## await async IMDB Node API for OMDb API from [here](https://www.omdbapi.com/)

#### Can fetch movies, series and episodes by id or title

#### Available from NPM

```
npm install --save imdb-movies
```

#### Installation

```
const imdbMovies = require("imdb-movies")
alternatively <b>import imdbMovies from "imdb-movies"</b>

const movie = new imdbMovies()
```

#### Get by title or id

```
<b>function accepts 3 parameters</b>

1. title / id type String | required
2. season type Int | optional
3. episode type Int | optional

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
#### Movie object looks as follows

```
{
	Title: 'The Sopranos',
	Year: '1999–2007',
	Rated: 'TV-MA',
	Released: '10 Jan 1999',
	Runtime: '55 min',
	Genre: 'Crime, Drama',
	Director: 'N/A',
	Writer: 'David Chase',
	Actors: 'James Gandolfini, Lorraine Bracco, Edie Falco, Michael Imperioli',
	Plot: 'New Jersey mob boss, Tony Soprano, deals with personal and professional issues in his home and business life, which affects his mental state and ends up seeking professional psychiatric counseling.',
	Language: 'English, Italian, Russian',
	Country: 'USA',
	Awards: 'Won 5 Golden Globes. Another 113 wins & 301 nominations.',
	Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTIxMjc4NTA2Nl5BMl5BanBnXkFtZTYwNTU2MzU5._V1_SX300.jpg',
	Metascore: 'N/A',
	imdbRating: '9.2',
	imdbVotes: '205,752',
	imdbID: 'tt0141842',
	Type: 'series',
	totalSeasons: '6',
	Response: 'True'
}
```
