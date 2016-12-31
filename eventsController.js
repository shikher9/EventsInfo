/**
 * Created by shikh on 29-Dec-16.
 */

var fs = require("fs");

var events = {
    get: function (req, res) {
        var event = fs.readFileSync("data/event/" + req.params.id + ".json", "utf-8");
        res.setHeader("Content-Type", "application/json");
        res.send(event);
    },
    post: function (req, res) {
        var event = req.body;
        fs.writeFileSync("data/event" + req.params.id + ".json", JSON.stringify(event));
        res.send(event);
    }
};


module.exports = events;

