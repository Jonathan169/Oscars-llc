const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(express.static("client/build"))

//routes 
var publicDir = require('path').join(__dirname, '/assets');
app.use(express.static(publicDir)); 

const routes = require("./routes");
app.use(routes)


//listener
app.listen(port,function(){
    console.log("listening on http://localhost:"+port)
})