function PurchaseOrderDetails({ order, setView }) {
  if (!order) return null;
  return (
    <div>
      <h2>Purchase Order Details</h2>
      <p><strong>Supplier:</strong> {order.supplierName}</p>
      <p><strong>Item:</strong> {order.itemName}</p>
      <p><strong>Quantity:</strong> {order.quantity}</p>
      <p><strong>Unit Price:</strong> {order.unitPrice}</p>
      <p><strong>Total Price:</strong> {order.quantity * order.unitPrice}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Created At:</strong> {new Date(order.createdAt).toLocaleString()}</p>
      <button onClick={() => setView("list")}>Back</button>
    </div>
  );
}
export default PurchaseOrderDetails;
