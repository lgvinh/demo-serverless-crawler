const BaseRepository = require("./baseESRepository");
const {} = require("../domain/product");

class ProductRepository extends BaseRepository {
  constructor() {
    super({ index: "products" });
  }
}

const productRepository = () => new ProductRepository();

module.exports = {
  productRepository,
  ProductRepository,
};
