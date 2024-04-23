var express = require('express');
var cors=require('cors');
var mongoDB = require("./mongodb.js");

var app = express();

app.use(cors({origin:true,credentials: true}));

// app.get("/",function(req,res) {
//     var name = req.query.name;
//     var name12 = req.query.name12;
//     console.log(name12);
//     res.send({"a":1,b:name,c:name12});
// })

// app.post("/post_hello",function(req,res) {
//     res.send("Found the response");
// })

app.get("/form_submit", async function(req,res) {
    console.log(req.query);
    var insertRes = await mongoDB.insertData({name:req.query.name,Lname:req.query.lname,Email:req.query.email,Mobno:req.query.mobno});
    res.send(insertRes);
})

var server = app.listen(5555, function () {
   console.log("Express App running at http://127.0.0.1:5555/");
})