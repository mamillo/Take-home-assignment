const PurchaseOrder = require("../models/Fastorder");

let orders = [];

function validateOrder(data) {
  const { supplierName, itemName, quantity, unitPrice, status } = data;
  if (!supplierName || !itemName) return "Supplier and Item are required";
  if (quantity <= 0) return "Quantity must be greater than 0";
  if (unitPrice <= 0) return "Unit Price must be greater than 0";
  if (!["pending", "approved", "rejected"].includes(status)) return "Invalid status";
  return null;
}

exports.createOrder = (req, res) => {
  const error = validateOrder(req.body);
  if (error) return res.status(400).json({ error });

  const order = new PurchaseOrder(req.body);
  orders.push(order);
  res.status(201).json(order);
};

exports.getOrders = (req, res) => res.json(orders);

exports.getOrderById = (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json(order);
};

exports.updateOrder = (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: "Order not found" });

  const error = validateOrder(req.body);
  if (error) return res.status(400).json({ error });

  Object.assign(order, req.body);
  res.json(order);
};

exports.deleteOrder = (req, res) => {
  const index = orders.findIndex(o => o.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Order not found" });

  orders.splice(index, 1);
  res.status(204).send();
};
