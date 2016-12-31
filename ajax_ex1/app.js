var express = require("express");
var fs = require('fs');

var app = express();




app.get("/", function(req, res){
  fs.readFile("index.html", function(err, contents){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(contents);
  })
})

app.get("/main.js", function(req, res){
  fs.readFile("main.js", function(err, contents){
    res.writeHead(200, {"Content-Type": "text/js"});
    res.end(contents);
  })
});



app.get("/plaindoc.txt", function(req, res){
  fs.readFile("plaindoc.txt", function(err, contents){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(contents);
  })
});



app.listen(8080);