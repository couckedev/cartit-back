const express = require('express');
const IngredientController = require('../controllers/IngredientController');

const router = express.Router();

router.post('/ingredient/create', IngredientController.create)

module.exports = router;
