const ElasticSearchRepository = require("../data-access-layer/repository");

const client = new ElasticSearchRepository();

module.exports.handler = async () => {
  try {
    const result = await client.search({
      index: "products",
      body: {
        query: {
          match: {
            name: "product",
          },
        },
      },
    });
    console.trace("Search successfully: ", result);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error("error: ", error);
  }
};
