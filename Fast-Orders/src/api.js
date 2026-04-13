const API_URL = "http://localhost:5000/purchase-orders";

export async function getPurchaseOrders() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createPurchaseOrder(order) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  return res.json();
}

export async function updatePurchaseOrder(id, order) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  return res.json();
}

export async function deletePurchaseOrder(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
