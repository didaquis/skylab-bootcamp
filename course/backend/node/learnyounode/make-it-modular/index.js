const filteredLs = require('./filtered-ls')
//import filteredLs from './filtered-ls'

filteredLs('..', 'js', files => files.forEach(file => console.log(file)))