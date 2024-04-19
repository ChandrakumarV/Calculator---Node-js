const express = require("express");
var bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(2000,()=>{
  console.log("server listening on port 2000");
  
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var n1 = req.body.num1
  var n2 = req.body.num2
  var sum = Number(n1) + Number(n2)
  res.send("sum : " + sum);
});


