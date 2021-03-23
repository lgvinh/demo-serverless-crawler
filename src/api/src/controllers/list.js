const ElasticSearchRepository = require("../data-access-layer/repository");
const { productDTO } = require('../data-access-layer/dto/product');

const client = new ElasticSearchRepository();

module.exports.handler = async (event) => {
  try {
    const requestBody = {
      from: 0,
      size: 10
    };

    if (event.queryStringParameters && event.queryStringParameters.query) {
      requestBody.query = {
        bool: {
          should: [
            { match: { name: event.queryStringParameters.query } },
            { match: { description: event.queryStringParameters.query } }
          ]
        }
      }
    }

    const { hits: {
        total: { value: total },
        hits: data
      }
    } = await client.search({
      index: "products",
      body: requestBody
    });

    const products = productDTO(data).getRawProducts();

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: products,
        total
      })
    };

  } catch (error) {
    console.log('Error: ', error);
  }
};
