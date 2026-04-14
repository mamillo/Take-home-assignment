const crypto = require("crypto");

class Fastorder {
  constructor({ supplierName, itemName, quantity, unitPrice, status }) {
    this.id = crypto.randomUUID();
    this.supplierName = supplierName;
    this.itemName = itemName;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.status = status;
    this.createdAt = new Date();
  }

  get totalPrice() {
    return this.quantity * this.unitPrice;
  }
}

module.exports = Fastorder;
