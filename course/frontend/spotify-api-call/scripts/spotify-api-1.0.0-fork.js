/**
 * Spotify API client (Implementación alternativa usando fetch!)
 *
 * @version 1.0.0
 */

/* Cuidado: IE11 no soporta "fetch", pero puedes usar: https://github.com/github/fetch */


let spotifyApi;
(function() {
	"use strict";

	function callUsingFetch(url, token, handleSuccess, handleError, timeout){
		const headers = { Authorization: "Bearer " + token };

		fetch(url, {headers})
			.then(res => res.json())
			.then(data => handleSuccess(data))
			.catch(err => handleError('Error: ', err));
	}


	function call(url, token, handleSuccess, handleError, timeout) {
		$.ajax({
			url: url,
			headers: { Authorization: "Bearer " + token },
			timeout: timeout,
			success: handleSuccess,
			error: handleError
		});
	}

	spotifyApi = {
		baseUrl: "https://api.spotify.com/v1/",
		token:
			"BQCZXpsgF3xcTSzhFl8xcQpKXuwSGi4zacFSFULSGfPw9Uj_JdQy4vLKm5TdmsUN2EeEk2WvYb0v7ZkY0S3rnRll7t0BOwRAh4s1KSnLoeLaLqFTzVP6hFj4jOZqnEJ3-Gefau4ecWuCnb66R5Y",
		timeout: 2000,

		/**
		 * Searches artists by matching a text.
		 *
		 * @param {String} query - The text to search.
		 * @param {Function} handleResults - Handles the results.
		 * @param {Function} handleError - Handles an error.
		 */
		searchArtists: function(query, handleResults, handleError) {
			callUsingFetch(
				this.baseUrl + "search?type=artist&q=" + query,
				this.token,
				function(results) {
					handleResults(results.artists.items);
				},
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
			callUsingFetch(
				this.baseUrl + "artists/" + artistId + "/albums",
				this.token,
				function(results) {
					handleResults(results.items);
				},
				handleError,
				this.timeout
			);
		},

		/**
		 * Retrieve tracks from an album (by album id).
		 *
		 *
		 * @param {String} albumId - The id of the album to retrieve the tracks from.
		 * @param {Function} handleResults - Handles the results.
		 * @param {Function} handleError - Handles an error.
		 */
		retrieveTracks: function(albumId, handleResults, handleError) {
			callUsingFetch(
				this.baseUrl + "albums/" + albumId + "/tracks",
				this.token,
				function(results) {
					handleResults(results.items);
				},
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