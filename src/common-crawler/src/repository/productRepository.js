const BaseRepository = require("./baseESRepository");
const { productDTO } = require("../domain/product");
const { INDICES } = require('../utils/constant');

class ProductRepository extends BaseRepository {
  constructor() {
    super({
      index: INDICES.PRODUCTS,
      Dto: productDTO
    });
  }
}

const productRepository = () => new ProductRepository();

module.exports = {
  productRepository,
  ProductRepository,
};
