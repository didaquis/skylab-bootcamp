const handleListUser = require('./handlers/handleListUser');
const handleRetrieveUser = require('./handlers/handleRetrieveUser');
const handleCreateUser = require('./handlers/handleCreateUser');
const handleUpdateUser = require('./handlers/handleUpdateUser');
const handleDeleteUser = require('./handlers/handleDeleteUser');

module.exports = [handleListUser, handleRetrieveUser, handleCreateUser, handleUpdateUser, handleDeleteUser]; /* Fíjate que los exporto como un array! */