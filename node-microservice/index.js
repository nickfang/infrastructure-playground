const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT | 3001;

app.get('/products', (req, res) => {
   res.status(200).json({
      products: [],
   });
});

app.get('/health', (req, res) => {
   res.status(200).json({
      status: 'UP',
      uptime: process.uptime()
   });
});

app.listen(PORT, () => {
   console.log(`Product Service is running on port ${port}`);
});
