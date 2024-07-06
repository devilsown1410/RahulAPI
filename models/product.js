const mongoose=require("mongoose");
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    company: { type: String, required: true },
    feature: { type: Boolean, default: false }
    // Add any other fields you need here
  }, { strict: true }); // This ensures only the fields defined above are stored
  
  const Product = mongoose.model('Product', productSchema);
  module.exports=Product;
  