/**
 *
 * @param {*} repository
 * @param {Function} dto
 * @returns {{
 *  search: Promise<any>,
 *  create: Promise<any>,
 *  bulk: Promise<any>,
 * }}
 */
const getESMethodFactory = (repository, dto) => {
  return {
    search: (options = {}) => repository.search(options),
    create: (data, options = {}) => {
      const dtoData = dto().convertData(data);
      return repository.create(dtoData, options);
    },
    bulk: (listData, options = {}) => {
      const listDtoData = listData.map((data) => dto().convertData(data));
      return repository.bulk(listDtoData, options);
    },
  };
};

module.exports = {
  getESMethodFactory,
};
