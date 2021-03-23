const AJV = require('ajv');

const options = { allErrors: true }

const ajv = new AJV.default(options);

const validate = (schema, json) => {
  let jsonObj = {};
  try {
    jsonObj = JSON.parse(json);

    const isValid = ajv.validate(schema, jsonObj);

    return !isValid ? ajv.errorsText(ajv.errors) : '';
  } catch (error) {
    return error;
  }
};

module.exports = { validate };
