class ElasticSearchDTO {
  constructor({hits}) {
    this.total = hits.total.value;
    this.data = hits.hits.map(({_source, ...hit}) => ({
      ...hit,
      ..._source
    }));
  }

  /**
   * 
   * @returns {{
   *  total: number,
   *  data: Array<any>
   * }}
   */
  getRawData() {
    return {
      total: this.total,
      data: this.data
    }
  }
};

const elasticSearchDTO = (data) => new ElasticSearchDTO(data);

module.exports = {
  ElasticSearchDTO,
  elasticSearchDTO
}