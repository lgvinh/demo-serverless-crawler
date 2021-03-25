const { Client } = require("elasticsearch");
const AWS = require("aws-sdk");
const awsHttpClient = require("http-aws-es");
const { baseDto } = require('../domain/base');

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
    Dto,
  }) {
    this.client = new Client(config);
    this.#index = index;
    this.dto = Dto;
  }

  async search(options = {}) {
    const searchResult = await this.client.search({
      index: this.#index,
      ...options,
    });
    return this.dto(searchResult).getData();
  }

  create(options = {}) {
    return this.client.create({
      index: this.#index,
      ...options
    });
  }

  bulk(options = []) {
    const bulkSet = options.flatMap((doc) => [
      {
        index: {
          _index: this.#index,
        },
      },
      doc,
    ]);
    return this.client.bulk({
      body: bulkSet
    });
  }
}

module.exports = BaseRepository;
