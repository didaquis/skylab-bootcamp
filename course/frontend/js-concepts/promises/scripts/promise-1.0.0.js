/**
 * Basic Promise pattern implementantion.
 *
 * @version 1.0.0
 *
 * @param {Function} action - The action to perform asynchronously.
 */
function promise(action) {
  var onSuccess, onError

  setTimeout(function () {
    try {
      var res = action()

      onSuccess(res)
    } catch (err) {
      onError(err)
    }
  }, 0)

  return {
    then: function (handleSuccess) {
      onSuccess = handleSuccess

      return this
    },

    catch: function (handleError) {
      onError = handleError

      return this
    }
  }
}
