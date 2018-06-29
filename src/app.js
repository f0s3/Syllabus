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
  let connection = mysql.createConnection({
    host:config.host_DB,
    user:config.user_DB,
    password:config.password_DB
  })

  if (!req.query.weekdays) req.query.weekdays = '*';

  if (!req.query.faculty && (!req.query.group)) {
    res.send({
      alert: 'Oops. I have found no faculty and group. Try to type that first and I will give you some info ;)'
    })
  } else if ((!req.query.faculty) && (req.query.group)) {
    res.send({
      alert: 'Would be better if you enter the faculty ;)'
    })
  } else if ((req.query.faculty) && (!req.query.group)) {
    res.send({
      alert: 'Type in your group and I will give you some nice info ;)'
    })
  } else if ((req.query.faculty) && (req.query.group)) {
    connection.connect((err) => {
      if (err) throw err

      connection.query(`USE ${req.query.faculty};`, (err) => {
        if (err) throw err
      })

      connection.query(`SELECT ${req.query.weekdays} FROM ${req.query.group};`, (err, result) => {
        if (err) throw err
        res.json(result)
      })
    })
  }
})

app.listen(config.port || 4444, () => console.log('App is listening on port '+ config.port +'!'))

/* exapmle of adding new group
CREATE TABLE IF NOT EXISTS Д_711 (
  id tinyint(3) NOT NULL AUTO_INCREMENT UNIQUE,
  monday varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  tuesday varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  wednesday varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  thursday varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  friday varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT ''
);
*/
