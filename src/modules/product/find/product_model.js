/**
 * Represents a product
 */
class ProductModel {
  /**
   * Creates a find product model
   * @param {Number} id The product id
   * @param {String} code The code
   * @param {String} name The name
   * @param {Number} buy_price The buy price
   * @param {Number} sell_price The sell price
   * @param {Number} packaging The packaging
   */
  constructor({ id, code, name, buy_price, sell_price, packaging }) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.buyPrice = buy_price;
    this.sellPrice = sell_price;
    this.packaging = packaging;
  }
}

export { ProductModel };
