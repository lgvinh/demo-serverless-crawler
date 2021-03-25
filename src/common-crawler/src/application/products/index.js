const { productRepository } = require("../../repository/productRepository");
const { getESMethodFactory } = require('../../utils');

const productMethods = getESMethodFactory(productRepository());

module.exports = productMethods;
