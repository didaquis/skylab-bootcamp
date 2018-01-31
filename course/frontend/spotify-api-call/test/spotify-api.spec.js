describe("Spotify API", function() {
	describe("search artists", function() {
		var artists;

		beforeEach(function(done) {
			spotifyApi.searchArtists(
				"madonna",
				function(_artists) {
					artists = _artists;

					done();
				},
				function(error) {
					done();
				}
			);
		});

		it("should get results on search", function() {
			expect(artists).not.toBeUndefined();

			expect(artists.length > 0).toBeTruthy();
		});
	});

	describe("retrieve albums", function() {
		var albums;

		beforeEach(function(done) {
			spotifyApi.retrieveAlbums(
				"6tbjWDEIzxoDsBA1FuhfPW",
				function(_albums) {
					albums = _albums;

					done();
				},
				function(error) {
					done();
				}
			);
		});

		it("should get items on retrieve", function() {
			expect(albums).not.toBeUndefined();

			expect(albums.length > 0).toBeTruthy();
		});
	});
});