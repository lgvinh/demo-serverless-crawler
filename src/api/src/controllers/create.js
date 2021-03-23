const { elasticSearchClient } = require("../data-access-layer/repository");
const { INDICES } = require('../config/constant');
const uuid = require('uuid');

module.exports.handler = async (event) => {
  const product = JSON.parse(event.body);
  const client = elasticSearchClient();
  try {
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
