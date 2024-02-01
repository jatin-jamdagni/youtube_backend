class ApiError extends Error {
  constructor(
    statudCode,
    message = "Something went wrong.",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statudCode = statudCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
