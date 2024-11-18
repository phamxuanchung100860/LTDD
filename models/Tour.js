const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true, // Thêm tùy chọn này
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
