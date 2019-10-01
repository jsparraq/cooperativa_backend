class User extends Error {
  constructor(message, statusCode) {
    super();
    this.name = this.constructor.name;
    this.message = message || 'Something went wrong. Please try again.';
    this.status = statusCode || 500;
  }
}
class UserExisting extends User {
  constructor() {
    super('There are an user with this email', 400);
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = UserExisting;
