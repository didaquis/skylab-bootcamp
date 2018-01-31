/**
 * Beers API client.
 * 
 * @version 1.0.0
 */
var beersApi;
(function() {
  "use strict";

  function call(url, handleSuccess, handleError, timeout) {
    $.ajax({
      url: url,
      timeout: timeout,
      success: handleSuccess,
      error: handleError
    });
  }

  beersApi = {
    baseUrl: "https://quiet-inlet-67115.herokuapp.com/api/",

    timeout: 2000,

    /**
     * Searches beers by matching a text.
     * 
     * @param {String} query - The text to search.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */
    search: function(query, handleResults, handleError) {
      call(
        this.baseUrl + "search/all?q=" + query,
        handleResults,
        handleError,
        this.timeout
      );
    },

    /**
     * Retrieves a beer detail by id.
     * 
     * @param {String} id - The id of the beer's details to retrieve.
     * @param {Function} handleDetail - Handles the detail.
     * @param {Function} handleError - Handles an error.
     */
    retrieve: function(id, handleDetail, handleError) {
      call(
        this.baseUrl + "beer/" + id,
        handleDetail,
        handleError,
        this.timeout
      );
    }
  };
})();
