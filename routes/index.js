const path = require('path');
const router = require('express').Router();
const fs = require('fs');
router.post("/gallery", function (req, res) {
    console.log(req.body)
    fs.readdir(path.join(__dirname, '../assets/images'), (err, files) => {
        var imageList = []
        if (req.body.imageRequest == "all") {
            files.forEach(file => {
                imageList.push(file)
            })
        } else {
            var pattern = new RegExp (req.body.imageRequest, "g")
            files.forEach(file => {
                if (file.match(pattern)) {
                    imageList.push(file)
                }
            })
        }
        if (imageList.length > req.body.loadAmount) {
            imageList = imageList.splice(0, req.body.loadAmount)
        }
        //console.log(imageList.length, req.body.loadAmount)
        //console.log(imageList)
        res.json(imageList)
    })
})
router.use(function(req,res){
    
    fs.readdir(path.join(__dirname, '../client'), (err, file) => {
        console.log(file)
    })
    res.sendFile(path.join(__dirname,"../client/build/index.html"))
})

module.exports= router;