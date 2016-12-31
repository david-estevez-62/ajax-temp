var express = require("express");
var fs = require('fs');
var mongoose = require('mongoose');


var Parts = require('./models/seeds/seed.js');

var Part = require('./models/parts.js');



mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/carparts');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var app = express();




app.get("/", function(req, res){
  fs.readFile("index.html", function(err, contents){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(contents);
  })
})

app.get("/carparts", function(req, res){
  var carPart = req.query.parts;
  Part.findOne({"name": carPart}, function(err, part){
    var msg;
    res.writeHead(200, {"Content-Type": "text/json"});
    if(part){
      msg = "We do have " + part.name;
    }else{
      msg = "Sorry don't have that " + carPart;
    }
    res.end(msg);
  });
})


app.get("/main.js", function(req, res){
  fs.readFile("main.js", function(err, contents){
    res.writeHead(200, {"Content-Type": "text/js"});
    res.end(contents);
  })
});



app.listen(8080);