const express = require('express');
const router = express.Router();
const { getItems, getItem, createItem } = require('../Controllers/tracks');

// http://localhost/tracks 
router.get('/', getItems);
router.post('/', createItem);

module.exports = router;