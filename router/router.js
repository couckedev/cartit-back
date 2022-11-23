const express = require('express');
const IngredientController = require('../controllers/IngredientController');
const RecipeController = require('../controllers/RecipeController');
const IngredientCreateValidator = require('../validators/IngredientCreateValidator');
const RecipeAddValidator = require('../validators/RecipeAddValidator');
const RecipeCreateValidator = require('../validators/RecipeCreateValidator');

const router = express.Router();

const errorHandler = (err, req, res, next) => {
    res.status(500).send(err)
}

router.post('/ingredient/create', IngredientCreateValidator.validate, IngredientController.create)
router.post('/recipe/create', RecipeCreateValidator.validate, RecipeController.create)
router.post('/recipe/add/:recipe_id', RecipeAddValidator.validate, RecipeController.add)
router.use(errorHandler)
module.exports = router;
