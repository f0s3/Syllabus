const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('./config/config')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.get(`/`, (req, res) => {
  
/*
  res.send({
    message: `Hello user! You've chosen ${req.query.faculty} faculty and ${req.query.group} is your group and also ${req.query.subgroup} is your subgroup!`
  });
*/  
  let connection = mysql.createConnection({
    host:config.host_DB,
    user:config.user_DB,
    password:config.password_DB,
    db:`Syllabus_NNIIM`
  })
  connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    let table = (req.query.subgroup === "") ? req.query.group : req.query.subgroup;
    connection.query('SELECT monday FROM `' + table + '`;', (err, result) => {
      if (err) throw err;
      res.json(result);
      console.log("db returned us this: ", res.json(result));
    });
  });
})

app.listen(config.port || 4444, () => console.log('App is listening on port '+ config.port +'!'))

/**
* CREATE TABLE IF NOT EXISTS `711` (
  `id` tinyint(5) unsigned NOT NULL AUTO_INCREMENT,
  `monday` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `tuesday` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `wednesday` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `thursday` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `friday` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
);
INSERT INTO `711` (monday, tuesday, wednesday, thursday, friday, isSubgroup)
 VALUES (
 'First lesson monday and the cabinet is _301_4',
 'First lesson in tuesday and the cabinet is _21_5',
 'First lesson in wednesday and the cabinet is _86_1',
 '',
 'looks like thursday doesn\'t have anything btw cabinet is_253_2',
 2);
* */