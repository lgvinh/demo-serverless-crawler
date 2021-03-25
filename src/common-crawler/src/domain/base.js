class BaseDto {
  constructor() {}

  /**
   * Abstract method to return data
   */
  convertData() {
    throw new Error("Base Dto convertData hasn't been implemented yet");
  }

  getData({ hits }) {
    const total = hits.total.value;
    const data = hits.hits.map(({ _source }) => ({
      ..._source,
    }));
    return {
      total,
      data,
    };
  }
}

const baseDto = (data) => new BaseDto(data);

module.exports = { BaseDto, baseDto };
