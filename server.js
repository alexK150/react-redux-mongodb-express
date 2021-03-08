const express = require('express');

const app = express();

app.get('/', (req, res) =>res.json({msg: 'Welcome to users!'}))

// Определение роутов
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));
app.use('/orders', require('./routes/orders'));

app.listen(5000, console.log('Server started on port 5000!'))