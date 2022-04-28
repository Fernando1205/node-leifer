const express = require('express');
const router = express.Router();
const { getItems, getItem, createItem } = require('../Controllers/tracks');
const { validatorCreateItem } = require('../validators/tracks');

// http://localhost/tracks 
router.get('/', getItems);
router.post('/', validatorCreateItem, createItem);

module.exports = router;