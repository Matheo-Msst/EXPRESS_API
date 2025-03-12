const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config()
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/ping', (req, res) => {
    res.send('pong')
});

app.get('/pong', (req, res) => {
    res.send('ping')
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
