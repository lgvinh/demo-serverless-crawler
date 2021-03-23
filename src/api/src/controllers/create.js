const { elasticSearchClient } = require("../data-access-layer/repository");
const { INDICES } = require("../config/constant");

module.exports.handler = async (event) => {
  const products = JSON.parse(event.body);
  const client = elasticSearchClient();
  const bulkSet = products.flatMap((doc) => [
    {
      index: {
        _index: INDICES.PRODUCT,
      },
    },
    doc,
  ]);
  console.log("bulkSet :>> ", bulkSet);
  try {
    const result = await client.bulk({
      body: bulkSet,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: error.status,
      body: JSON.stringify(error.body),
    };
  }
};
