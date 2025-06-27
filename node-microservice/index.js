const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT | 3001;

app.get('/products', (req, res) => {
  res.status(200).json({
    products: [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ],
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    uptime: process.uptime(),
  });
});

app.listen(port, () => {
  console.log(`Product Service is running on port ${port}`);
});
