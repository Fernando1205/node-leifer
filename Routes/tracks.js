const express = require('express');
const router = express.Router();

// http://localhost/tracks 
router.get('/', (req, res) => {

    const data = ['Hola', 'mundo'];

    res.send({ data });
})

module.exports = router;