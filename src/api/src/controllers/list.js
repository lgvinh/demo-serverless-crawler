const ElasticSearchRepository = require("../data-access-layer/repository");

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
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: data.map(product =>  product._source ),
        total
      })
    };
    
  } catch (error) {
    console.log('Error: ', error);
  }
};
