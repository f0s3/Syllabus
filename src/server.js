var express = require('express');
var path = require('path');
var app = express();
var port = 4444;
var directory = __dirname.substring(0, __dirname.length - 4);

app.use(express.static(directory + "/public/"));

app.get('/', function (req, res) {
    res.sendFile(directory + "/public/" + "html/" + "index.html");
});
app.listen(port, function () {
    console.log('app listening on port '+ port +'!');
});