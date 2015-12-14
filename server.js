var express = require("express");
var app = express();
//var mongojs = require("mongojs")
app.use(express.static(__dirname + '/public'));
app.get('/operationlist', function(req,res){
    console.log("GET request");
    
    operation1 = {
        title: 'hekate',
        type: 'A',
        description: 'A-A-A'
    };
    operation2 = {
        title: 'odin',
        type: 'B',
        description: 'B-22-2B2'
    };
    
    operation3 = {
        title: 'inanna',
        type: 'C',
        description: '333-333-333'        
    };
    var operationlist = [operation1, operation2, operation3];
    res.json(operationlist);
});
app.listen(process.env.PORT, process.env.IP);//8080, 0.0.0.0 

console.log("Server running...");