const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String
        , required: [true, "Title is required"]
        , minlength: [2, "Title must be at least 2 characters long"]
        , maxlength: [40, "Title must be at less than 40 characters"]
    }
    , price: {
        type: Number
        , required: [true, "Price is required"]
        , min: [.01, "Price must be at least $0.01 or greater"]
        , max: [300, "Price cannot be greater than $300"]

    }
    , desc: { type: String
    , required: [true, "Desc is required"]
    , maxlength: [255, "Desc must be at less than or equal to 255 characters"]
    }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);
