/**
 * Represents a find product query
 */
class Query {
  /**
   * Creates a find product query
   * @param {Number} id The id
   * @param {String} code The code
   * @param {String} name The name
   * @param {Number} buyPrice The buy price
   * @param {Number} sellPrice The sell price
   * @param {Number} packaging The packaing
   * @param {Boolean} deleted True if include deleted products
   * @param {Number} page The page
   * @param {Number} size The page size
   */
  constructor({
    id,
    code,
    name,
    buyPrice,
    sellPrice,
    packaging,
    deleted,
    page,
    size,
  }) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.packaging = packaging;
    this.deleted = deleted;
    this.page = page * size - size;
    this.size = size;
  }
}

export { Query };
