const request = require('supertest');
const express = require('express');
const productsRoute = require('../backend/routes/');
const app = express();

app.use(express.json());
app.use('/product', productsRoute);

describe('Products API', () => {
  it('GET /product should return a 200 and array', async () => {
    const res = await request(app).get('/product');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
