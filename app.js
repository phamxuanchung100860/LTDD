const express = require('express');
const connectDB = require('./config/db');

const tourRoutes = require('./routes/tourRoutes'); // Import routes

const app = express();
app.use(express.json());

connectDB(); // Kết nối đến MongoDB

app.use('/api', tourRoutes); // Sử dụng routes

// Bắt đầu server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});
