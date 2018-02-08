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
	 * @param {String} URL of Spotify endpoint
	 * @param {String} Auth token
	 * @param {Function} Function for handle success request
	 * @param {Function} Function for handle errors
	 * @param {Integer} Miliseconds of timeout
	 * @returns {Promise<Response>} Data received from endpoint
	 * @throws {String} If something go wrong
	 */
	function call(url, token, handleSuccess, handleError, timeout) {
		const headers = { Authorization: "Bearer " + token };

		fetch(url, { headers })
			.then(res => {
				if(res.status === 200){
					return res.json();
				}else{
					console.error(`Error code: ${res.status}`);
					console.error(`Error status: ${res.statusText}`);
					throw new Error(res.statusText);
				}
			})
			.then(handleSuccess)
			.catch(handleError);
	}


	spotifyApi = {
		baseUrl: "https://api.spotify.com/v1/",
		token: "BQAr5oH_CRCJzRQ2zwQUcfLBYHf84WECsaVtkOfYSfdCsZqCpEa0A7OVpmSHltXqhEnGKinR3gRr5EvT2rTCQq_7b3fV2z48tSPDVtqwjLaRjwer51r0M82TypLQG5VPtxRxIJ6mdbbQY2w",
		timeout: 2000,

		/**
		 * Searches artists by matching a text.
		 *
		 * @param {String} query - The text to search.
		 * @param {Function} handleResults - Handles the results.
		 * @param {Function} handleError - Handles an error.
		 */
		searchArtists: function(query, handleResults, handleError) {
			call(
				this.baseUrl + "search?type=artist&q=" + query,
				this.token,
				results => handleResults(results.artists.items),
				handleError,
				this.timeout
			);
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