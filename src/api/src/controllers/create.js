const uuid = require('uuid');
const { elasticSearchClient } = require("../data-access-layer/repository");
const { INDICES } = require('../config/constant');
const validation = require('../config/validation');
const createProductSchema = require('../schemas/createProductSchema.json');

module.exports.handler = async (event) => {
  // validation first
  const validationError = validation.validate(createProductSchema, event.body);
  if (validationError !== '') {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: validationError })
    }
  }
  const client = elasticSearchClient();
  try {
    const product = JSON.parse(event.body);
    const result = await client.create({
      id: uuid.v4(),
      index: INDICES.PRODUCT,
      body: product
    });

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: error.status,
      body: JSON.stringify(error.body)
    }
  }
};
