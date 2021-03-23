class ProductDTO {
  /**
   * 
   */
  constructor(product) {
    this.product = product;
  }

  /**
   * @typedef {{
   *  "_index": string,
   *  "_type": string,
   *  "_id": string,
   *  "_score": number
   *  name: string,
   *  description: string
   *  price: number
   * }} Product
   * 
   * @returns {Product}
   */
  getRawProduct() {
    return this.product;
  }
}

const productDTO = (product) => new ProductDTO(product);

module.exports = {
  ProductDTO,
  productDTO
}
