class ProductDTO {
  constructor({ _index, _type, _id, _score, name, description, price }) {
    this._index = _index;
    this._type = _type;
    this._id = _id;
    this._score = _score;
    this.name = name;
    this.description = description;
    this.price = price;
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
    return {
      _index: this._index,
      _type: this._type,
      _id: this._id,
      _score: this._score,
      name: this.name,
      description: this.description,
      price: this.price,
    };
  }
}

const productDTO = (product) => new ProductDTO(product);

module.exports = {
  ProductDTO,
  productDTO,
};
