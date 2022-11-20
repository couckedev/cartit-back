const express = require('express');
const IngredientController = require('../controllers/IngredientController');
const HomeController = require('../controllers/IngredientController');

const router = express.Router();

router.get('/', IngredientController.index)

module.exports = router;
