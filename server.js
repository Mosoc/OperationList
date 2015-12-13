var express = require("express");
var app = express();
//var mongojs = require("mongojs")
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT, process.env.IP);//8080, 0.0.0.0 

console.log("Server running...");