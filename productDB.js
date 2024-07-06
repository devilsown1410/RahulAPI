require("dotenv").config();
const connectDB = require("./db/connect");
const ProductJson = require("./products.json");
const Product = require("./models/product");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    await Product.deleteMany();
    const result = await Product.insertMany(ProductJson.map(productData => ({
      name: productData.name,
      price: productData.price,
      company: productData.company,
      feature: productData.feature || false
    })));
    console.log(`${result.length} Products inserted successfully`);
  } catch (error) {
    console.error('Error with the database operation:', error);
  }
  process.exit(0); // Exit the process after completion
};

start();