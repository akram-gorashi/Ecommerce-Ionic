const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    // public imageurl: number,
    price: {
        type: Number,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    fuel: {
        type: String,
        require: true
    },
    km: {
        type: Number,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    cat: {
        type: String,
        require: true
    },
});
module.exports = mongoose.model('product', productSchema);