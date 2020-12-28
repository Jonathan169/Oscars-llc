var express = require('express');
var app = express();
var path = require('path');
var os = require('os');
var bodyParser = require('body-parser');
var fs = require('fs');

var add_comment = function(comment) {
    var comments = get_comments();
    comments.push({"date": new Date(), "text": comment});
    fs.writeFileSync('./comments.json', JSON.stringify(comments));
};

var get_comments = function() {
    var comments;
    if (fs.existsSync('./comments.json')) {
        comments = fs.readFileSync('./comments.json');
        comments = JSON.parse(comments);
    } else {
        comments = [];
    }
    return comments;
};

app.use(function log (req, res, next) {
  console.log([req.method, req.url].join(' '));
  next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static("client/build"))

//routes 
var publicDir = require('path').join(__dirname, '/assets');
app.use(express.static(publicDir)); 




app.set('view engine', 'jade');
app.get('/', function(req, res) {
    var comments = get_comments();
    res.render("index",
               { agent: req.headers['user-agent'],
                 hostname: os.hostname(),
                 os: os.type(),
                 nodeversion: process.version,
                 time: new Date(),
                 admin: (process.env.APP_ADMIN_EMAIL || "admin@unconfigured-value.com" ),
                 comments: get_comments()
               });
});

app.post('/', function(req, res) {
    var comment = req.body.comment;
    if (comment) {
        add_comment(comment);
        console.log("Got comment: " + comment);
    }
    res.redirect("/#form-section");
});
const routes = require("./routes");
app.use(routes)

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on %s', process.env.PORT);
});
