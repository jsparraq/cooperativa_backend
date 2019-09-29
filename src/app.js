const express = require('express');

const app = express();

const { port } = require('./config');
const database = require('./db/DBs');

database
  .connectDB()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('DB Connected Succesfully');
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error('Failed to make database connection!');
    // eslint-disable-next-line no-console
    console.error(err);
  });

app.get('/', function(_, res) {
  res.send('Hello this is the Cooperativa backend');
});

app.listen(port, function() {
  // eslint-disable-next-line no-console
  console.log(`Cooperativa backend app listening on port ${port}!`);
});
