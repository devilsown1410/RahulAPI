const mongoose = require('mongoose');

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    // Optional: Implement retry logic here
    // For critical applications, you might want to exit if the DB connection cannot be established
    process.exit(1);
  }
};

module.exports = connectDB;