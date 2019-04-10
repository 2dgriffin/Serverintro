var http = require('http');

var url = require('url');

var fs = require('fs');

http.createServer(function(req, res){

    // res.writeHeader('200', {
    //     "content-type" : "text/plain"
    // })
    // res.end("Hello World"); //sends stuff then ends action\

    // res.writeHeader('307', {
    //     "Location" : "Http://www.w3schools.com"
    // })
    // res.end("Hello Worled")

    var pathname = url.parse(req.url).pathname;
    console.log(pathname);

    // if (pathname === "/"){
    //     res.writeHeader('200', {
    //         "content-type" : "text/plain"
    //     })
    //     res.end("index.html");
    // } else if (pathname === "/about.html"){
    //     res.writeHeader('200', {
    //         "content-type" : "text/plain"
    //     })
    //     res.end("about.html");
    // } else {
    //     res.writeHeader('404' , {
    //         "content-type" : "text/plain"
    //     })
    //     res.end("File Not Found");
    // }

    var theFile;
    switch(pathname) {
        case '/derp':
        case '/derp.html':
            theFile = "derp.html";
            break;
        default:
            theFile = "index.html";
    }

    fs.readFile('index.html', function(err, data){
        res.writeHead('200' , {
            "content-type" : "text/html"
        });
        res.end(data);
    })

}).listen(3000);

console.log("Server is running");