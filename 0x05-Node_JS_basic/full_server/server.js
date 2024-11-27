const express = require('express');
const app = express();

const port = 1245;
const hostname = '127.0.0.1'

export default app;

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})