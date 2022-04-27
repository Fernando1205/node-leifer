const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../Utils/handleStorage');
const { createItem } = require('../Controllers/storage');

router.post('/', uploadMiddleware.single("myfile"), createItem);

module.exports = router;