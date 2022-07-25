const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    price: {
        type: Number
    },
});

const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel;