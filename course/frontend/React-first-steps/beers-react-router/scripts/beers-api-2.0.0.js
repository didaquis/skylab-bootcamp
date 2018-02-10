/**
 * Beers API client based on Fetch API.
 * 
 * @version 2.0.0
 */
let beersApi
(() => {
  'use strict'

  function call(path) {
    return fetch(`${inst.baseUrl}/${path}`)
      .then(res => res.json())
  }

  const inst = {
    baseUrl: 'https://quiet-inlet-67115.herokuapp.com/api',

    /**
     * Searches beers by matching a text.
     * 
     * @param {String} query - The text to search.
     * @returns {Promise} - A promise that resolves if API call succeeds, otherwise rejects.
     */
    search: query => call(`search/all?q=${query}`),

    /**
     * Retrieves a beer detail by id.
     * 
     * @param {String} id - The id of the beer's details to retrieve.
     * @returns {Promise} - A promise that resolves if API call succeeds, otherwise rejects.
     */
    retrieve: id => call(`beer/${id}`)
  }

  beersApi = inst
})()
