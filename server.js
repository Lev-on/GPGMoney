// const express = require('express');
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'GPGMoney')));

app.get('/testhtml', (req, res) => {
  res.sendFile(path.join(__dirname, 'GPGMoney/index.html'));
});

app.listen(3008, () => {
  console.log(`Server is running on http://localhost:${'3008'}`);
});
