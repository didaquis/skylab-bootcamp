import usersApi from 'users-api-client';

/* Configuration imported from '.env' file */
usersApi.protocol = process.env.REACT_APP_USERS_API_PROTOCOL;
usersApi.host = process.env.REACT_APP_USERS_API_HOST;
usersApi.port = process.env.REACT_APP_USERS_API_PORT;

export default usersApi;