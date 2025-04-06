const express = require('express');
const router = express.Router();
const db = require('../db/database');

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerName
 *               - address
 *               - phoneNumber
 *               - status
 *               - createdAt

 *             properties:
 *               customerName:
 *                 type: string
 *               address:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               status:
 *                 type: string
 *               createdAt:
 *                 type: string
 *     responses:
 *       201:
 *         description: Order created
 */
router.post('/', (req, res) => {
  const { customerName, address, phoneNumber, items } = req.body;
  const status = 'Pending';
  const createdAt = new Date().toISOString();

  db.run(
    `INSERT INTO orders (customerName, address, phoneNumber, status, createdAt)
     VALUES (?, ?, ?, ?, ?)`,
    [customerName, address, phoneNumber, status, createdAt],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });

      const orderId = this.lastID;

      // Insert each item in the order
      const stmt = db.prepare(
        `INSERT INTO order_items (orderId, productId, quantity, priceAtTime) VALUES (?, ?, ?, ?)`
      );

      items.forEach((item) => {
        stmt.run(orderId, item.productId, item.quantity, item.priceAtTime);
      });

      stmt.finalize();
      res.status(201).json({ message: 'Order created', orderId });
    }
  );
});

/**
 * @swagger
 * /order:
 *   get:
 *     summary: Get all orders
 *     responses:
 *       200:
 *         description: List of orders
 */
router.get('/', (req, res) => {
  db.all(`SELECT * FROM orders`, [], (err, orders) => {
    if (err) return res.status(500).json({ error: err.message });

    let result = [];
    let remaining = orders.length;

    if (orders.length === 0) return res.json([]);

    orders.forEach((order) => {
      db.all(
        `SELECT * FROM order_items WHERE orderId = ?`,
        [order.id],
        (err2, items) => {
          if (err2) return res.status(500).json({ error: err2.message });

          result.push({ ...order, items });
          remaining--;

          if (remaining === 0) {
            res.json(result);
          }
        }
      );
    });
  });
});

// PUT /orders/:id - Update order status
router.put('/:id', (req, res) => {
  const { status } = req.body;
  db.run(
    `UPDATE orders SET status = ? WHERE id = ?`,
    [status, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Order status updated' });
    }
  );
});

// DELETE /orders/:id - Cancel an order
router.delete('/:id', (req, res) => {
  const orderId = req.params.id;

  db.run(`DELETE FROM order_items WHERE orderId = ?`, [orderId], (err) => {
    if (err) return res.status(500).json({ error: err.message });

    db.run(`DELETE FROM orders WHERE id = ?`, [orderId], (err2) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.json({ message: 'Order deleted' });
    });
  });
});

module.exports = router;
