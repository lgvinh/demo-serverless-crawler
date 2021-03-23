const { Client } = require("elasticsearch");
const AWS = require("aws-sdk");
const awsHttpClient = require("http-aws-es");

const { ES_END_POINT, REGION } = process.env;

/**
 * @typedef {import("elasticsearch").SearchParams} SearchParams
 */
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
  };

  create(options = {}) {
    return this.client.create(options);
  }
};

const elasticSearchClient = new ElasticSearchRepository();

module.exports = {
  ElasticSearchRepository,
  elasticSearchClient
}
