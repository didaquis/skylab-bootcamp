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
			"BQDLbGZo3xveEZQ-Z8pRl65FLGoHW5nWXu8X3crs4V5mMVw9ioY6-rvHwaZQa1kLeGssbLdUI4avzH8VqNQiWg8dPUKD0KxPBCx2HIKrr-aWJGhzkR0vX1N9By1ELEN4hHfqeEWjCvD_kUg",

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
		 * @param {String} albumId - The id of the album to retrieve the tracks from.
		 * @param {Function} handleResults - Handles the results.
		 * @param {Function} handleError - Handles an error.
		 */
		retrieveTracks: function(albumId, handleResults, handleError) {
			// TODO implement album's tracks retrieval by means of endpoint https://api.spotify.com/v1/albums/{id}/tracks
		},

		/**
		 * Retrieve track by id.
		 *
		 * @param {String} id - The id of the track to retrieve information from.
		 * @param {Function} handleResults - Handles the results.
		 * @param {Function} handleError - Handles an error.
		 */
		retrieveTracks: function(id, handleResults, handleError) {
			// TODO implement track information retrieval by means of endpoint https://api.spotify.com/v1/tracks/{id}
		}
	};
})();