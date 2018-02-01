/**
 * Spotify API client.
 *
 * @version 1.0.0
 */
var spotifyApi;
(function() {
	"use strict";

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
			"BQDRyDe5QFLjbwA6GzIei3iITq1sOzU_FZ2MMefJH7gTiebuWVQbyL1dQYlAL0UjgJsq5MLjmAA0_aEzjKW8eO0mNw0jmUvCcMPpROt-w6kWckXDYB_pK6PpuYSMjm1NeQSJF8TN-13Hxj1TLZQR69IH_cFk",

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
			call(
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
			call(
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
			// TODO implement track information retrieval by means of endpoint https://api.spotify.com/v1/tracks/{id}

			/* Es innecesario hacer esta llamada */
		}
	};
})();