class Context {
  constructor(event = {}) {
    this.request = {
      body: event.body,
    };
  }

  response({ statusCode, body }) {
    return {
      statusCode,
      body: JSON.stringify(body),
    };
  }
}

const context = (event) => new Context(event);

module.exports = {
  Context,
  context,
};
