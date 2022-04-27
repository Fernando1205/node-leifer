require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./Config/mongo');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// Invocación de rutas
app.use("/api", require('./Routes'));

app.listen(port, () => {
    console.log(`Tu app esta lista por http://localhost:${port}`);
});

dbConnect();