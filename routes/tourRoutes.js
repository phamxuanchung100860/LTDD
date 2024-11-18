const express = require('express');
const Tour = require('../models/Tour'); // Import model Tour
const router = express.Router();

// Route để lấy danh sách tất cả các tour
router.get('/tours', async (req, res) => {
    try {
        const tours = await Tour.find(); // Lấy tất cả các tour từ MongoDB
        res.status(200).json(tours); // Trả về dữ liệu dưới dạng JSON
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Lỗi khi lấy dữ liệu' });
    }
});

module.exports = router;
