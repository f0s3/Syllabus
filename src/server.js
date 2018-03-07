let express = require('express');
//let path = require('path');
let app = express();
let port = 4444;
let directory = __dirname.substring(0, __dirname.length - 4);

app.use(express.static(directory + "/public/"));

app.get('/', function (req, res) {
    res.sendFile(directory + "/public/" + "html/" + "index.html");
});
app.listen(port, function () {
    console.log('app listening on port '+ port +'!');
});