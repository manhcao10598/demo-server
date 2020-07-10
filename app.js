var express = require("express");
var app = express();
var router = require("./routers/index.js")

app.use("/api",router);

app.listen(3000,function(){
    console.log("ket noi thanh cong");
})