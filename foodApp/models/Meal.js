const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    available: Boolean
})


module.exports = mongoose.model('Food', FoodSchema);