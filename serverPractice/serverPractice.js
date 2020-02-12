console.log('here we are in vscode');
var http = require('http');
var fs = require('fs');
var path = require('path');

const server = http.createServer(function (request, response) {
    //function and console log
    //https://nodejs.org/api/http.html#http_message_url
    console.log('request ', request.url);
    //response.end();

    const url = request.url;

    function removeFirstChar(s) {
        return s.substring(1);
        
    }

    console.log("url =>", url);

    let filePath;
    if (url == "/") {
       filePath = "index.html"; 
    } else if (url == "/osito") {
        return response.end("osito");
    } else {
        filePath = removeFirstChar(url);
    }
    
    console.log(`filePath => '${filePath}'`);

    fs.readFile(filePath, function(error, content){
        console.log({ error, content });
        response.end(content)
    });
    

});


server.listen(7777);

