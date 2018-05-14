const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
let app = express();
let port = 4444;

app.use(morgan('combined'));

app.get('/', (req, res) => 
		res.send({
			body:data
		})
	);
app.post('/', (req, res) => {
	res.send({
		body:data
	});
});

app.listen(port, () => console.log('App listening on port '+ port +'!'));