const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling Get request to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling Post request to /products'
    });
});

module.exports = router;