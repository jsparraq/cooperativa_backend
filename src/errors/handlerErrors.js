const { UserExisting, User } = require('./index');

exports.handlerError = async err => {
  let customError;
  if (err.name === 'MongoError') {
    if (err.code === 11000) {
      if (err.message.includes('User')) {
        customError = new UserExisting();
      }
    }
  } else if (err instanceof User) {
    customError = err;
  } else {
    return { status: 500, body: { type: 'Error', message: 'Something went wrong. Please try again.', name: 'Error' } };
  }
  const message = customError.getMessage();
  const name = customError.getName();
  const status = customError.getStatus();
  const type = customError.getType();
  return { status, body: { type, message, name } };
};
