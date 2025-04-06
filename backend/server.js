const express = require('express');
const app = express();
const db = require('./db/database'); // This connects DB and creates tables

// Import routes
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');

// Middleware to parse JSON
app.use(express.json());

// Use the routes
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
