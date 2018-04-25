let express = require('express');
let morgan = require('morgan');
let fs = require('fs');
let path = require('path');
let app = express();
let port = 4444;
let directory = __dirname.substring(0, __dirname.length - 4);
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.use(express.static(directory + "/public/"));
app.use(morgan('[:date:[web]] :remote-addr :method :url :status :response-time ms', {stream: accessLogStream}));
app.get('/', (req, res) => res.sendFile(directory + "/public/" + "html/" + "index.html"));
app.listen(port,() => console.log('app listening on port '+ port +'!'));