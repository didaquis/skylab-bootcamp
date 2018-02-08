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
		const token = "BQBc8-UU-dYlgao25bLT13eZUABOuHdI8-bpxAHGRRG_iaZdqYFw1EctaRoj4nveO5EP0VLVMZ-RBSore15nICP1sYMsilSgHT8fORlKDhRjVd4lfZwcpDMzxGpIwjoZvKDmASCd_6-C2Jg";
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
		searchArtists: function(query) {
			return call("search?type=artist&q=" + query).then(res =>  res.artists.items);
		},

		/**
		 * Retrieve albums from an artist (by artist id).
		 *
		 * @param {String} artistId - The id of the artist to retrieve the albums from.
		 * @param {Function} handleResults - Handles the results.
		 * @param {Function} handleError - Handles an error.
		 */
		retrieveAlbums: function(artistId, handleResults, handleError) {
			call(
				this.baseUrl + "artists/" + artistId + "/albums",
				this.token,
				results => handleResults(results.items),
				handleError,
				this.timeout
			);
		},

		/**
		 * Retrieve tracks from an album (by album id).
		 *
		 * @param {String} albumId - The id of the album to retrieve the tracks from.
		 * @param {Function} handleResults - Handles the results.
		 * @param {Function} handleError - Handles an error.
		 */
		retrieveTracks: function(albumId, handleResults, handleError) {
			call(
				this.baseUrl + "albums/" + albumId + "/tracks",
				this.token,
				results => handleResults(results.items),
				handleError,
				this.timeout
			);
		},

		/**
		 * Retrieve track by id.
		 *
		 * @param {String} id - The id of the track to retrieve information from.
		 * @param {Function} handleResults - Handles the results.
		 * @param {Function} handleError - Handles an error.
		 */
		retrieveTrack: function(id, handleResults, handleError) {
			call(
				this.baseUrl + "tracks/" + id,
				this.token,
				handleResults,
				handleError,
				this.timeout
			);
		}
	};
})();