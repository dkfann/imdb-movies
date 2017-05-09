require('es6-promise').polyfill();
require('isomorphic-fetch');

export class imdbMovies {
	async fetchImdbMovie(endpoint) {
		const url = `https://www.omdbapi.com${endpoint}`;
		const response = await fetch(url);
		const json = await response.json();

		if (response.status !== 200)
			throw Error(json.message);

		return json;
	}

	async getByTitle(title, season = null, episode = null) {

		if(!title) {
			console.error("title is required!")
			return;
		}

		try {
			const Season = season ? `&Season=${season}` : "";
			const Episode = episode ? `&Episode=${episode}` : "";
			return await this.fetchImdbMovie(`/?t=${title}${Season}${Episode}`);
		} catch (err) {
			console.error(`Error: ${err.message}`);
		}
	}

	async getById(id, season = null, episode = null) {

		if(!id) {
			console.error("id is required!")
			return;
		}

		try {
			const Season = season ? `&Season=${season}` : "";
			const Episode = episode ? `&Episode=${episode}` : "";
			return await this.fetchImdbMovie(`/?i=${id}${Season}${Episode}`);
		} catch (err) {
			console.error(`Error: ${err.message}`);
		}
	}

	hello() {
		return 'hello world'
	}
}
