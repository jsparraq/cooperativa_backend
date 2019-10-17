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

class EmailPassWrong extends User {
  constructor() {
    super("The credentails you've entered doesn't match any account", 401, 'Request Error');
    Error.captureStackTrace(this, this.constructor);
  }
}

class UserAuth extends User {
  constructor() {
    super("User id doesn't match token", 401, 'Auth Error');
    Error.captureStackTrace(this, this.constructor);
  }
}

class UserRole extends User {
  constructor() {
    super("You don't have permissions for this operation", 401, 'Permissions Error');
    Error.captureStackTrace(this, this.constructor);
  }
}

class UserNotAccepted extends User {
  constructor() {
    super("You haven't been accepted", 401, 'Auth Error');
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  UserExisting,
  EmailPassWrong,
  UserAuth,
  User,
  UserRole,
  UserNotAccepted,
};
