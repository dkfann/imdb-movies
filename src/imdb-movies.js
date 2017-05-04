const fetch = require("node-fetch");

class imdb {
	async fetchImdbMovie(endpoint) {
		const url = `https://www.omdbapi.com${endpoint}`;
		const response = await fetch(url);
		const json = await response.json();

		if (response.status !== 200)
		throw Error(json.message);

		return json;
	}

	async getByTitle(title, season = null, episode = null) {
		try {
			const Season = season ? `&Season=${season}` : "";
			const Episode = episode ? `&Episode=${episode}` : "";
			const movie = await this.fetchImdbMovie(`/?t=${title}${Season}${Episode}`);
			console.log(movie);
			return movie;
		} catch (err) {
			console.error(`Error: ${err.message}`);
		}
	}

	async getById(id, season = null, episode = null) {
		try {
			const Season = season ? `&Season=${season}` : "";
			const Episode = episode ? `&Episode=${episode}` : "";
			const movie = await this.fetchImdbMovie(`/?i=${id}${Season}${Episode}`);
			console.log(movie);
			return movie;
		} catch (err) {
			console.error(`Error: ${err.message}`);
		}
	}
}

module.exports = imdb
