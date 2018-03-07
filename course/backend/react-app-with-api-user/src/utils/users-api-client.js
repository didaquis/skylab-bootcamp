import usersApi from 'users-api-client';

usersApi.protocol = 'http';
usersApi.host = 'localhost';
usersApi.port = '5000';

export default usersApi;