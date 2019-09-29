var express = require('express');
var app = express();
const { port } = require('./config');

app.get('/', function (_, res) {
  res.send('Cooperativa backend');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
})