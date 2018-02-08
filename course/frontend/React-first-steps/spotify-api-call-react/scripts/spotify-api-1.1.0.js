/**
 * Spotify API client (Implementación alternativa usando fetch!)
 *
 * @version 1.1.0
 */

/* Cuidado: IE11 no soporta "fetch", pero puedes usar este polyfill: https://github.com/github/fetch */

let spotifyApi;
(function() {
	"use strict";


	/**
	 * Make a request to Spotify public API
	 * 
	 * @param {String} URL of Spotify endpoint ('https://api.spotify.com/v1/' is provided)
	 * @returns {Promise<Response>} Data received from endpoint
	 * @throws {String} If something go wrong
	 */
	function call(url) {
		const baseUrl = "https://api.spotify.com/v1/";

		const token = "BQAhtB7bwmEBWr8PkgyikwDT700JgulGGb8w0idjFc689yxoFXdnBJnj2TCXEvwi3B1-Dh0XyNVx2t3mykcfaNupCSbzlDdS8OPgGglMKgB5kjtDnGqYusBeWKC_5cYSW5fJ8_LxTkQdHe0";

		const headers = { Authorization: "Bearer " + token };


		return fetch(baseUrl + url, { headers })
			.then(res => {
				if(res.status === 200){
					return res.json();
				}else{
					console.error(`Error code: ${res.status}`);
					console.error(`Error status: ${res.statusText}`);
					throw new Error(res.statusText);
				}
			});
	}


	spotifyApi = {

		/**
		 * Searches artists by matching a text.
		 *
		 * @param {String} query - The text to search.
		 * @returns {Promise<Response>} Data received from endpoint
		 * @throws {String} If something go wrong
		 */
		searchArtists: (query) => {
			return call(`search?type=artist&q=${query}`).then(res => res.artists.items)
		},


		/**
		 * Retrieve albums from an artist (by artist id).
		 *
		 * @param {String} artistId - The id of the artist to retrieve the albums from.
		 * @returns {Promise<Response>} Data received from endpoint
		 * @throws {String} If something go wrong
		 */
		retrieveAlbums: (artistId) => {
			return call(`artists/${artistId}/albums`).then(res => res.items)
		},


		/**
		 * Retrieve tracks from an album (by album id).
		 *
		 * @param {String} albumId - The id of the album to retrieve the tracks from.
		 * @returns {Promise<Response>} Data received from endpoint
		 * @throws {String} If something go wrong
		 */
		retrieveTracks: (albumId) => {
			return call(`albums/${albumId}/tracks`).then(res => res.items)
		},


		/**
		 * Retrieve track by id.
		 *
		 * @param {String} id - The id of the track to retrieve information from.
		 * @returns {Promise<Response>} Data received from endpoint
		 * @throws {String} If something go wrong
		 */
		retrieveTrack: (id) => {
			return call(`tracks/${id}`)
		}
	};
})();