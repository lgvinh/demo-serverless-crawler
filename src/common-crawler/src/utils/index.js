/**
 * 
 * @param {*} repository
 * @returns {{
 *  search: Promise<any>,
 *  create: Promise<any>,
 *  bulk: Promise<any>,
 * }}
 */
const getESMethodFactory = (repository) => {
  return {
    search: (options = {}) => repository.search(options),
    create: (options = {}) => repository.create(options),
    bulk: (options = {}) => repository.bulk(options),
  }
}

module.exports = {
  getESMethodFactory
};
