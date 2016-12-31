var express = require("express");
var fs = require('fs');




var parts = ["turbo", "transmission", "nitro"];


var app = express();




app.get("/", function(req, res){
  fs.readFile("index.html", function(err, contents){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(contents);
  })
})

app.get("/carparts", function(req, res){
  var carPart = req.query.parts;
  var msg;
  if(parts.indexOf(carPart) !== -1){
    msg = "We do have " + carPart;
  }else{
    msg = "Sorry don't have that " + carPart;
  }

  res.end(msg);

})

app.get("/main.js", function(req, res){
  fs.readFile("main.js", function(err, contents){
    res.writeHead(200, {"Content-Type": "text/js"});
    res.end(contents);
  })
});



app.listen(8080);