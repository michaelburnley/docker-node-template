require('dotenv').config();
const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send(`Let's get started, I suppose.`)
})

app.listen(3000);