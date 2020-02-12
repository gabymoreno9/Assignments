var http = require('http');
var fs = require('fs');
var path = require('path');

const server = http.createServer(function (request, response) {
    //function and console log
    //https://nodejs.org/api/http.html#http_message_url
    console.log('request ', request.url);
    response.end();

});

server.listen(7777);

