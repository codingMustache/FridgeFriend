const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.DB_Connect;

mongoose
  .connect(URI)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Failed to connect to DB', err);
  });
