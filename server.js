/**
 * Created by shikh on 28-Dec-16.
 */


var express = require("express");
var app = express();
var events = require("./eventsController");
var bodyParser = require("body-parser");
var fs = require("fs");

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));


app.get("/data/event/:id", events.get);
app.post("/data/event/:id", events.post);
app.get("/data/events", function (req, res) {
    var events = fs.readFileSync("data/events.json", "utf-8");
    res.setHeader("Content-Type", "application/json");
    res.send(events);
});

app.get("/", function (req, res) {
    res.sendfile("index.html");
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});