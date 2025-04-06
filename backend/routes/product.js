const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET all products
router.get('/', (req, res) => {
  db.all(`SELECT * FROM products`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// POST a new product
router.post('/', (req, res) => {
  const { name, category, price, stock } = req.body;
  db.run(
    `INSERT INTO products (name, category, price, stock) VALUES (?, ?, ?, ?)`,
    [name, category, price, stock],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, name, category, price, stock });
    }
  );
});

// PUT (update) a product
router.put('/:id', (req, res) => {
  const { name, category, price, stock } = req.body;
  db.run(
    `UPDATE products SET name = ?, category = ?, price = ?, stock = ? WHERE id = ?`,
    [name, category, price, stock, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Product updated' });
    }
  );
});

// DELETE a product
router.delete('/:id', (req, res) => {
  db.run(`DELETE FROM products WHERE id = ?`, [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Product deleted' });
  });
});

module.exports = router;
