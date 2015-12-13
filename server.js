var express = require("express");
var app = express();
//var mongojs = require("mongojs")
app.get('/', function(req, res){
    res.send("Hello World")
});

app.listen(process.env.PORT, process.env.IP);//8080, 0.0.0.0 

console.log("Server running...");