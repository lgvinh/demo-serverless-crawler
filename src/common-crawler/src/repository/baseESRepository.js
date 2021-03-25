const { Client } = require("elasticsearch");
const AWS = require("aws-sdk");
const awsHttpClient = require("http-aws-es");

const { ES_END_POINT, REGION } = process.env;

class BaseRepository {
  // Private property
  #index;

  constructor({
    config = {
      host: ES_END_POINT,
      connectionClass: awsHttpClient,
      amazonES: {
        region: REGION,
        credentials: new AWS.Credentials(),
      },
    },
    index,
    // Dto,
  }) {
    this.client = new Client(config);
    this.#index = index;
    // this.dto = new Dto();
  }

  async search(options = {}) {
    const searchResult = await this.client.search({
      index: this.#index,
      ...options,
    });
    return searchResult;
    // return this.dto.getData(searchResult);
  }

  create(options = {}) {
    return this.client.create(options);
  }

  bulk(options = {}) {
    return this.client.bulk(options);
  }
}

module.exports = BaseRepository;
