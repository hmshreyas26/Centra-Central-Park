const API_BASE = 'http://localhost:3000';

export const getProducts = async () => {
  const res = await fetch(`${API_BASE}/products`);
  return await res.json();
};

export const addProduct = async (product) => {
  const res = await fetch(`${API_BASE}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return await res.json();
};

export const updateProduct = async (id, updatedProduct) => {
  const res = await fetch(`${API_BASE}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedProduct),
  });
  return await res.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${API_BASE}/products/${id}`, { method: 'DELETE' });
};
