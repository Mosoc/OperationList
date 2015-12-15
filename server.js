var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs('operationlist',['operationlist']);
var bodyParser = require("body-parser");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/operationlist', function(req,res){
    console.log("GET request");
    
    db.operationlist.find(function(err,docs){
        console.log(docs);
        res.json(docs);
    });
});

app.post('/operationlist',function(req,res){
    console.log(req.body);
    db.operationlist.insert(req.body, function(err, doc){
        res.json(doc);
    });
});

app.delete('/operationlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.operationlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.listen(process.env.PORT, process.env.IP);//8080, 0.0.0.0 

console.log("Server running...");