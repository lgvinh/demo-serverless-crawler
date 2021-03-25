const { BaseDto } = require("./base");

class ProductDTO extends BaseDto {
  constructor(rawProduct) {
    super(rawProduct);
  }
}

const productDTO = (rawProduct) => new ProductDTO(rawProduct);

module.exports = {
  ProductDTO,
  productDTO,
};