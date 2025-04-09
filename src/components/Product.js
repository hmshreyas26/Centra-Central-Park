import React, { useEffect, useState } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', category: '', price: '', stock: '' });

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    await addProduct({ ...form, price: parseFloat(form.price), stock: parseInt(form.stock) });
    setForm({ name: '', category: '', price: '', stock: '' });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Delete this product?');
    if (!confirmed) return;

    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  const handleUpdate = async (id) => {
    const newStock = prompt('Enter new stock quantity:');
    if (!newStock || isNaN(newStock)) return;

    const product = products.find(p => p.id === id);
    if (!product) return;

    try {
      await updateProduct(id, { ...products.find(p => p.id === id), stock: parseInt(newStock) });
      fetchProducts();
    } catch (err) {
      console.error('Error updating stock:', err);
    }
  };

  return (
    <div>
      <h2>Product Inventory</h2>
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <input type="text" name="price" placeholder="Price" value={form.price} onChange={handleChange} />
      <input type="text" name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} />
      <button onClick={handleAdd}>Add Product</button>

      <table border="1" cellPadding="5">
        <thead>
          <tr><th>ID</th><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Actions</th></tr>
        </thead>
        <tbody>
        {products.length === 0 ? (
            <tr><td colSpan="6">No products found.</td></tr>
          ) : (
          products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.category}</td>
              <td>{prod.price}</td>
              <td>{prod.stock}</td>
              <td>
                <button onClick={() => handleUpdate(prod.id)}>Update Stock</button>
                <button onClick={() => handleDelete(prod.id)}>Delete</button>
              </td>
            </tr>
          ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
