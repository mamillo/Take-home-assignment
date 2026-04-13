import React, { useState } from "react";
import { createPurchaseOrder, updatePurchaseOrder } from "../api";

function PurchaseOrderForm({ setView, order }) {
  const [form, setForm] = useState(order || {
    supplierName: "",
    itemName: "",
    quantity: 1,
    unitPrice: 1,
    status: "pending"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.quantity <= 0 || form.unitPrice <= 0) {
      alert("Quantity and Unit Price must be greater than 0");
      return;
    }
    if (order) {
      await updatePurchaseOrder(order.id, form);
    } else {
      await createPurchaseOrder(form);
    }
    setView("list");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{order ? "Edit Purchase Order" : "Create Purchase Order"}</h2>
      <input name="supplierName" placeholder="Supplier Name" value={form.supplierName} onChange={handleChange} required />
      <input name="itemName" placeholder="Item Name" value={form.itemName} onChange={handleChange} required />
      <input type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
      <input type="number" name="unitPrice" placeholder="Unit Price" value={form.unitPrice} onChange={handleChange} required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>
      <button className="submit" type="submit">Save</button>
    </form>
  );
}
export default PurchaseOrderForm;
