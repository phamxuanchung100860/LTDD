const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Tour = require('./models/Tour'); 

// Kết nối đến MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/demo_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Kết nối đến MongoDB thành công!');
    // Gọi hàm chèn dữ liệu sau khi kết nối thành công
    seedDatabase();
})
.catch(err => {
    console.error('Lỗi kết nối:', err);
    process.exit(1);
});

// Đọc dữ liệu từ data.json
const dataPath = path.join(__dirname, 'data.json');

const seedDatabase = async () => {
    try {
        // Đọc dữ liệu từ tệp JSON
        const data = fs.readFileSync(dataPath, 'utf-8');
        const tours = JSON.parse(data);

        // Xóa tất cả các tài liệu trong bộ sưu tập Tour
        await Tour.deleteMany({});

        // Chèn dữ liệu từ file data.json vào bộ sưu tập Tour
        await Tour.insertMany(tours);
        console.log('Dữ liệu đã được chèn thành công!');
    } catch (err) {
        console.error('Lỗi khi chèn dữ liệu:', err);
    } finally {
        // Đóng kết nối
        mongoose.connection.close();
    }
};
