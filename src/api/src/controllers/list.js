const { elasticSearchClient } = require("../data-access-layer/repository");
const { productDTO } = require('../data-access-layer/dto/product');
const { elasticSearchDTO } = require('../data-access-layer/dto/elasticSearch');
const { INDICES, DEFAULT_PAGE_SIZE, DEFAULT_PAGE_START } = require('../config/constant');

module.exports.handler = async (event) => {
  const { query, page, pageSize } = event.queryStringParameters ? event.queryStringParameters : {};

  const requestBody = {
    from: (page - 1) * pageSize || DEFAULT_PAGE_START,
    size: +pageSize || DEFAULT_PAGE_SIZE
  };

  if (query) {
    requestBody.query = {
      bool: {
        should: [
          { match: { name: query } },
          { match: { description: query } }
        ]
      }
    }
  }

  const client = elasticSearchClient();
  try {
    const result = await client.search({
      index: INDICES.PRODUCT,
      body: requestBody
    });

    const { data, total } = elasticSearchDTO(result).getRawData();

    const products = data.map(product => productDTO(product).getRawProduct()) ;

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: products,
        total
      })
    };
  } catch (error) {
    return {
      statusCode: error.status,
      body: JSON.stringify(error.body)
    }
  }
};
