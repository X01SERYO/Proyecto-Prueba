class Command {
  /**
   *
   * @param {*} name
   * @param {*} buyPrice
   * @param {*} sellPrice
   * @param {*} packaging
   */
  constructor({name, buyPrice, sellPrice, packaging}) {
    this.name = name;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.packaging = packaging;
  }
}

export { Command };
