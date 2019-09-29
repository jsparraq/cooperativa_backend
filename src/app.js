var express = require('express');
var app = express();

const { port } = require('./config');
const database = require('./db/DBs');

database.connectDB().then((dbs) => {
  console.log('DB Connected Succesfully');
}).catch((err) => {
  console.error('Failed to make database connection!');
  console.error(err);
});


app.get('/', function (_, res) {
  res.send('Cooperativa backend');
});

app.listen(port, function () {
  console.log(`Cooperativa backend app listening on port ${port}!`);
})