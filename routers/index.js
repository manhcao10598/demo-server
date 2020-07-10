var express = require("express");
var router = express.Router();


router.get("/v1",function(req,res){
    res.json("router");
});


module.exports=router;