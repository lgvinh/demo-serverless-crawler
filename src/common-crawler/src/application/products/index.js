const { productRepository } = require("../../repository/productRepository");
const { productDTO } = require("../../domain/product");
const { getESMethodFactory } = require("../../utils");

const productMethods = getESMethodFactory(productRepository(), productDTO);

module.exports = productMethods;
