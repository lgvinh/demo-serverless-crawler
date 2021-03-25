const { productRepository } = require("../repository/productRepository");

const getProducts = (options = {}) => {
  return productRepository().search(options);
};

module.exports = {
  getProducts,
};
