const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
    quote: {
        type: String
    },
    author: {
        type: String
    },
});

const QuoteModel = mongoose.model('quote', quoteSchema);

module.exports = QuoteModel;