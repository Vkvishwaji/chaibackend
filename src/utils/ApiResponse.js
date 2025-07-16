class ApiResponse {
  constructor(
    message="Operation successful",
    statusCode, //200 by default
    data  // default to null
  ) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };