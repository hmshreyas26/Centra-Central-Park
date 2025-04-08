const API_BASE = 'http://localhost:8080';


// <---------------- Product APIs START-------------------------- >
export const getProducts = async () => {
  const res = await fetch(`${API_BASE}/product`);
  console.log('Fetched products:', res);
  return await res.json();
};

export const addProduct = async (product) => {
  const res = await fetch(`${API_BASE}/product`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return await res.json();
};

export const updateProduct = async (id, updatedProduct) => {
  const res = await fetch(`${API_BASE}/product/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedProduct),
  });
  return await res.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${API_BASE}/product/${id}`, { method: 'DELETE' });
};

// <--------------------------------------------- >

// <---------------- Order APIs -------------------------- >
export const getOrders = async () => {
  const res = await fetch(`${API_BASE}/order`);
  console.log('Fetched orders:', res);
  return await res.json();
};

export const addOrder = async (Orders) => {
  const res = await fetch(`${API_BASE}/Orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Orders),
  });
  return await res.json();
};

export const updateOrders = async (id, updatedOrders) => {
  const res = await fetch(`${API_BASE}/Orders/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedProduct),
  });
  return await res.json();
};

export const deleteOrders = async (id) => {
  await fetch(`${API_BASE}/Orders/${id}`, { method: 'DELETE' });
};


// <--------------------------------------------- >
