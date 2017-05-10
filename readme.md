## IMDB Movies, await async OMDb API from [here](https://www.omdbapi.com/)

#### Can fetch movies, series and episodes by id or title from IMDB

#### Available from NPM

```
$ npm install imdb-movies --save
```

#### Installation

```shell
const {imdbMovies} = require("imdb-movies")
import {imdbMovies} from "imdb-movies"
```

#### Get by title or id

```shell
const m = new imdbMovies();

const sopranos = async () => {
	// Accepts 3 parameters
	// 1. title / id type String | required
	// 2. season type Int | optional
	// 3. episode type Int | optional

  const moviePromise = m.getByTitle('The Sopranos')
  const episodePromise = m.getById("tt0141842", 1, 2) // returns episode object
  const episodesPromise = m.getById("tt0141842", 1)

  const movie = await moviePromise; // returns movie object
  const episode = await episodePromise; // returns episode object
  const episodes = await episodesPromise; // returns following object with episodes in Episodes array

  console.log(movie, episode, episodes) // 3 objects
  console.log(episodes.Episodes.length) // 13
}

sopranos()
```

### React example

```shell
import React, { Component } from 'react'
import { imdbMovies } from 'imdb-movies'

const movie = new imdbMovies();

class App extends Component {
	async componentDidMount() {
		const object = await movie.getByTitle('The Sopranos');
		console.log(object)
	}
}

export default App
```

#### Episodes and Movie object

```shell

Episodes

{
	Title: 'The Sopranos',
	Season: '1',
	totalSeasons: '6',
	Episodes: [...]
}

Movie

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
