/**
 * Abstract class
 */
class BaseDto {
  constructor({hits}) {
    this.total = hits.total.value;
    this.data = hits.hits.map(({_source}) => ({
      ..._source
    }));
  }

  /**
   * 
   */
  getData() {
    return {
      total: this.total,
      data: this.data
    }
  }
}

const baseDto = (data) => new BaseDto(data);

module.exports = { BaseDto, baseDto };
