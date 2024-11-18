const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Kết nối đến MongoDB
        await mongoose.connect('mongodb://127.0.0.1:27017/demo_api');
        console.log('Kết nối đến MongoDB thành công!');
    } catch (error) {
        console.error('Lỗi kết nối đến MongoDB:', error);
        process.exit(1); // Dừng ứng dụng nếu không thể kết nối
    }
};

module.exports = connectDB;
