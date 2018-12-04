
/*
var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hello world");
});

app.get("/name/:name", function(req, res){
    var name = req.params.name;
    res.send("<h1>Hello " + name +"</h1>");
 });
 

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
*/

var express = require("express");
var app = express();

app.get("/google", function(req, res){
    res.redirect('http://google.com');
 });

 app.get("/google/:search", function(req, res){
     var a = req.params.search;
    res.redirect('http://google.com/search?q='+ a);
 });

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});


