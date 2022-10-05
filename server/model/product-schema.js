import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailurl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
}); 

const Product = mongoose.model('Product', productSchema);
export default Product;