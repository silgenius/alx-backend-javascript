const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.end('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
    const { id } = req.params
    res.end(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
    const resp = {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    }
    res.send(resp)
})

app.post('/login', (req, res) => {
    const { userName } = req.body
    res.send(`Welcome ${userName}`)
})

app.listen(7865, () => {
    console.log('API available on localhost port 7865')
});