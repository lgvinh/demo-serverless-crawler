const { DEFAULT_PAGE_START, DEFAULT_PAGE_SIZE } = require("./constant");

class Context {
  constructor(event = {}) {
    this.request = {
      body: JSON.parse(event.body || "{}"),
      queryParameters: event.queryStringParameters || {},
    };
  }

  getPagination() {
    const { page, pageSize } = this.request.queryParameters;
    let from = (page - 1) * pageSize;
    const size = +pageSize || DEFAULT_PAGE_SIZE;

    if (from < 0 || !from) {
      from = DEFAULT_PAGE_START;
    }

    return {
      from,
      size,
    };
  }

  response({ statusCode, body }) {
    return {
      statusCode,
      body: JSON.stringify(body || {}),
    };
  }
}

const context = (event) => new Context(event);

module.exports = {
  Context,
  context,
};
