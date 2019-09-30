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
    super('Existing user', 400);
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = UserExisting;
