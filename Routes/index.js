const express = require('express');
const router = express.Router();
const fs = require('fs');

const PATH_ROUTES = __dirname;

// Remueve extension .js de los ficheros
const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}

// Lee todos los archivos de Routes y devuelve la ruta con el archivo.
fs.readdirSync(PATH_ROUTES).filter((file) => {

    const name = removeExtension(file);
    if (name !== 'index') {
        router.use(`/${name}`, require(`./${file}`));

    }
})

module.exports = router;