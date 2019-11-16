const mongoose = require('mongoose');

const mobileSchema = mongoose.Schema({
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
    cat: {
        type: String,
        require: true
    },
});
module.exports = mongoose.model('mobile', mobileSchema);