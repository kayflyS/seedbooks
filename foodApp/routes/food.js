const express = require('express');
const router = express.Router()
const foodController = require('../controllers/food');


router.post('/', foodController.createMeal)

module.exports = router;