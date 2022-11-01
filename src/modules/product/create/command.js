/**
 * Represents a product
 */
class Command {
  /**
   * Creates a create product command
   * @param {String} code The code
   * @param {String} name The name
   * @param {Number} buyPrice The buy price
   * @param {Number} sellPrice The sell price
   * @param {Number} packaging The packaing
   */
  constructor({ code, name, buyPrice, sellPrice, packaging }) {
    this.code = code;
    this.name = name;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.packaging = packaging;
  }
}

export { Command };
