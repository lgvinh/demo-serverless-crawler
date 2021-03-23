class ProductDTO {
  /**
   * 
   */
  constructor(data) {
    this.products = data.map(({ _source }) => _source)
  }

  /**
   * @typedef {{
   *  name: string,
   *  description: string
   *  price: number
   * }} Product
   * 
   * @returns {Product[]}
   */
  getRawProducts() {
    return this.products;
  }
}

const productDTO = (products) => {
  return new ProductDTO(products);
}

module.exports = {
  ProductDTO,
  productDTO
}
