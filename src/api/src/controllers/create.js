const ElasticSearchRepository = require("../data-access-layer/repository");
const uuid = require('uuid');

const client = new ElasticSearchRepository();

module.exports.handler = async (event) => {
  try {
    const product = JSON.parse(event.body);

    const result = await client.create({
      id: uuid.v4(),
      index: 'products',
      body: product
    });

    console.trace("Create successfully: ", result);
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
