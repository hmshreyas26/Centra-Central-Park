const request = require('supertest');
const express = require('express');
const ordersRoute = require('../backend/routes/order');
const app = express();

app.use(express.json());
app.use('/order', ordersRoute);

describe('order API', () => {
  it('GET /order should return a 200 and array', async () => {
    const res = await request(app).get('/order');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
