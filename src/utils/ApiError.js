class ApiError extends Error {
  constructor(
    message="Something went wrong",
     statusCode,
     error=[],
     stack="" // default stack trace
    ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.error = error;

    if(stack) {
      this.stack = stack;
    }else{
        Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };