const path = require('path');
const router = require('express').Router();
const fs = require('fs');

require('dotenv').config();



router.post("/test",function(req,res){
    console.log("made it")
})

router.get("/gallery/all", function (req, res) {
    fs.readdir(path.join(__dirname, '../assets/images'), (err, files) => {
        var imageList = []
        files.forEach(file => {
            imageList.push(file)
            console.log(imageList.length)
        })
        res.json(imageList)
    })
})

router.use(function(req,res){
    res.sendFile(path.join(__dirname,"../client/build/index.html"))
})

module.exports= router;