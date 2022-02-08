const express = require('express');
const app = express();
app.use(express.json());
app.get('/hello', (req, res) =>
  res.send('Hello World!'));

const PORT = 4000;
app.listen(PORT);
