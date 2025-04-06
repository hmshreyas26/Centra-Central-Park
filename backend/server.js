const express = require('express');
const app = express();
const db = require('./db/database'); // This connects DB and creates tables
const setupSwagger = require('./swagger');

// Import routes
const productRoutes = require('./routes/product');
const ordersRoutes = require('./routes/order');

// Middleware to parse JSON
app.use(express.json());

// Use the routes
app.use('/product', productRoutes);
app.use('/order', ordersRoutes);

setupSwagger(app);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
