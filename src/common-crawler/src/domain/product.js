const { BaseDto } = require("./base");

class ProductDTO extends BaseDto {
  convertData({ name, description, price }) {
    return {
      name,
      description,
      price,
    };
  }
}

const productDTO = (config) => new ProductDTO(config);

module.exports = {
  ProductDTO,
  productDTO,
};
