const express = require('express');
const router = express.Router();

// Получение зарегистрированного usera
router.get('/', (req, res) => {
  res.send('Зарегистрированный пользователь')
})

// Auth нового usera
router.post('/', (req, res) => {
  res.send('Регистрация пользователя')
})

module.exports = router;