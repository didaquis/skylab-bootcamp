describe("Beers API", function() {
  describe("Search", function() {
    var beers;

    beforeEach(function(done) {
      beersApi.search(
        "mahou",
        function(_beers) {
          beers = _beers;

          done();
        },
        function(error) {
          done();
        }
      );
    });

    it("should get beers on search", function() {
      expect(beers).not.toBeUndefined();

      expect(beers.length > 0).toBeTruthy();
    });
  });

  describe("Retrieve", function() {
    var beer;

    beforeEach(function(done) {
      beersApi.retrieve(
        "fD2DR3",
        function(_beer) {
          beer = _beer;

          done();
        },
        function(error) {
          done();
        }
      );
    });

    it("should get detail on retrive", function() {
      expect(beer).not.toBeUndefined();

      expect(beer.name).toBeDefined();
    });
  });
});
