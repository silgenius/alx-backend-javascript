const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
    const { id } = req.params
    res.end(`Payment methods for cart ${id}`);
});

app.listen(7865, () => {
    console.log('API available on localhost port 7865')
});