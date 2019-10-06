const { UserExisting } = require('./index');

exports.handlerError = err => {
  let customError;
  if (err.name === 'MongoError') {
    if (err.code === 11000) {
      if (err.message.includes('User')) {
        customError = new UserExisting();
      }
    }
  } else {
    return { status: 500, body: { type: 'Error', message: 'Something went wrong. Please try again.', name: 'Error' } };
  }
  const message = customError.getMessage();
  const name = customError.getName();
  const status = customError.getStatus();
  const type = customError.getType();
  return { status, body: { type, message, name } };
};
