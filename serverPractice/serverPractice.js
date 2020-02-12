console.log('here we are in vscode');
var http = require('http');
var fs = require('fs');
var path = require('path');

// passomg a function inside a function and that is a callback
//this function is going to be called when we ,ake a rewuest to a web server
const server = http.createServer(function (request, response) {
    //function and console log
    //https://nodejs.org/api/http.html#http_message_url
    console.log('request ', request.url);
    //response.end();

    const url = request.url;

    console.log("url =>", url);

    let filePath;
    if (url == "/") {
       filePath = "index.html"; 
    } else {
        filePath = url.substring(1);;
    }
    
    console.log(`filePath => '${filePath}'`);


    //we are using a callback function for when like the file is finished reading
    //the callback is when a function is a parameter
    fs.readFile(filePath, function(error, content){
        if (error) {
            console.log("Couldn't find that file, serving the 404 page instead");
            fs.readFile('404.html', function(error, content) {
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.end(content, 'utf-8');
            });
        }
        else {
            response.end(content)
        }
    });
    

});


server.listen(7777);

