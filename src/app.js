const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { handlerError } = require('./errors/handlerErrors');

// Routes
const router = require('./routes');

const app = express();

const { port } = require('./config/config');
const database = require('./db/DBs');

// Logger
logger.token('status', function(_, res) {
  const status = res.statusCode;
  let color;
  if (status >= 500) {
    color = 31;
  } else if (status >= 400) {
    color = 33;
  } else if (status >= 300) {
    color = 36;
  } else if (status >= 200) {
    color = 32;
  } else {
    color = 0;
  }

  return `\x1b[${color}m${status}\x1b[0m`;
});

app.use(helmet());

app
  .use(
    logger(
      function(tokens, req, res) {
        return [
          tokens.date(req, res),
          tokens.method(req, res),
          tokens.url(req, res),
          tokens.status(req, res),
          tokens['response-time'](req, res),
          'ms',
        ].join(' ');
      },
      {
        skip(req) {
          return req.url === '/' || req.method === 'OPTIONS';
        },
      }
    )
  )
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

app.use(router);

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
