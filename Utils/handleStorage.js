const multer = require('multer');

const storage = multer.diskStorage({

    destination: function(req, file, cb) {
        const path = `${__dirname}/../storage`;
        cb(null, path);
    },

    filename: function(req, file, cb) {

        const ext = file.originalname.split('.').pop();
        const fileName = `file-${Date.now()}.${ext}`;
        cb(null, fileName);
    }
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;