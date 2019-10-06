class User extends Error {
  constructor(message, statusCode, type) {
    super();
    this.name = this.constructor.name;
    this.message = message || 'Something went wrong. Please try again.';
    this.status = statusCode || 500;
    this.type = type || 'Error';
  }

  getMessage() {
    return this.message;
  }

  getName() {
    return this.name;
  }

  getStatus() {
    return this.status;
  }

  getType() {
    return this.type;
  }
}
class UserExisting extends User {
  constructor() {
    super('There are an user with this email', 400, 'Database Error');
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = UserExisting;
