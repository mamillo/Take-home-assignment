import React, { useEffect, useState } from "react";
import { getPurchaseOrders, deletePurchaseOrder } from "../api";

function PurchaseOrderList({ setView, setSelectedOrder }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getPurchaseOrders().then(setOrders);
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      await deletePurchaseOrder(id);
      setOrders(orders.filter(o => o.id !== id));
    }
  };

  return (
    <div>
      <h3>All Purchase Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.supplierName}</td>
              <td>{order.itemName}</td>
              <td>{order.quantity}</td>
              <td>{order.unitPrice}</td>
              <td>{order.quantity * order.unitPrice}</td>
              <td>{order.status}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
              <td>
                <button onClick={() => { setSelectedOrder(order); setView("details"); }}>View</button>
                <button onClick={() => { setSelectedOrder(order); setView("create"); }}>Edit</button>
                <button onClick={() => handleDelete(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PurchaseOrderList;
