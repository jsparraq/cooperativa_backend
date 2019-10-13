const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { handlerError } = require('./errors/handlerErrors');

// Routes
const routes = require('./routes/users');
const partnerRoutes = require('./routes/partner');
const authRoutes = require('./routes/auth');

const app = express();

const { port } = require('./config/config');
const database = require('./db/DBs');

const errorsLogger = logger('dev', {
  skip(req) {
    return req.url === '/';
  },
});

const dateLogger = logger('[:date]', {
  skip(req) {
    return req.url === '/';
  },
});

app.use(helmet());

app
  .use(dateLogger)
  .use(errorsLogger)
  .use(
    bodyParser.json({
      limit: '50mb',
    })
  )
  .use(
    bodyParser.urlencoded({
      limit: '50mb',
      extended: true,
      parameterLimit: 50000,
    })
  )
  .use(cors());

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

app.use(routes);
app.use(partnerRoutes);
app.use(authRoutes);

app.get('/', function(_, res) {
  res.send('Hello this is the Cooperativa backend');
});

app.listen(port, function() {
  // eslint-disable-next-line no-console
  console.log(`Cooperativa backend app listening on port ${port}!`);
});

// catch 404 and forward to error handler
app.use(function(err, _, res, next) {
  handlerError(err).then(err => {
    res.status(err.status).json(err.body);
  });
});

module.exports = app;
