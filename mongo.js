const mongoose = require('mongoose');
const connectionString = process.env.MONGO_URI;


mongoose.connect(connectionString)
  .then(() => {
    console.log('Database connected')
  })
  .catch((err) => {
    console.log('Database connection error:', err)
  });
