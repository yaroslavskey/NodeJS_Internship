const http = require('http');
const server = require('./server');
const events = require('./events');
const PORT = server.get('port');

require('../config/mongoConnection')();

events.bind(http.createServer(server).listen(PORT));
