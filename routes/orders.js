const express = require('express');
const router = express.Router();

// Получение всех заказов готовых к отправке
router.get('/', (req, res) => {
  res.send('Get all orders')
})

// Добавление заказа
router.post('/', (req, res) => {
  res.send('Add an order')
})

// Обновление заказа
router.put('/:id', (req, res) => {
  res.send('Update an order')
})

// Обновление заказа
router.delete('/:id', (req, res) => {
  res.send('Delete an order')
})

module.exports = router;