const express = require('express');

const { connectToDatabase } = require('./src/configs/database.config');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const start = async () => {
  await connectToDatabase();
  app.listen(3001, () => {
    console.log(`Server running on port ${3001}`);
  });
};

start();
