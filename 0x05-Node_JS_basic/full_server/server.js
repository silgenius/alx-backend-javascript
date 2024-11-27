const express = require('express');
const app = express();
const router = require('./routes/index')

const port = 1245;
const hostname = '127.0.0.1'

app.use('/', router)

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
