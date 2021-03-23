const { Client } = require("elasticsearch");
const AWS = require("aws-sdk");
const awsHttpClient = require("http-aws-es");

const { ES_END_POINT, REGION } = process.env;

class ElasticSearchRepository {
  constructor(
    config = {
      host: ES_END_POINT,
      connectionClass: awsHttpClient,
      amazonES: {
        region: REGION,
        credentials: new AWS.Credentials(),
      },
    }
  ) {
    this.client = new Client(config);
  }

  search(options = {}) {
    return this.client.search(options);
  }

  create(options = {}) {
    return this.client.create(options);
  }

  bulk(options = {}) {
    return this.client.bulk(options);
  }
}

const elasticSearchClient = (config) => new ElasticSearchRepository(config);

module.exports = {
  ElasticSearchRepository,
  elasticSearchClient,
};
