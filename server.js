//Importing server module
const http = require('http');


//Importing routes
const SERVE = require('./modules/routes');

//PORT NUMBER
const PORT_NUMBER = 3000;

//Creating Server
const server = http.createServer( SERVE );

server.listen(
    PORT_NUMBER,
    () => console.log('listening to http://localhost:3000')
);