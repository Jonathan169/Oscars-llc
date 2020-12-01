const path = require('path');
const router = require('express').Router();

require('dotenv').config();

router.post("/test",function(req,res){
    console.log("made it")
})
router.use(function(req,res){
    res.sendFile(path.join(__dirname,"../client/build/index.html"))
})
module.exports= router;