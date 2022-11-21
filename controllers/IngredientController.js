const IngredientService = require('../services/IngredientService')

class IngredientController {
    async create(request,response,next) {
        try{
            const created_ingredient = await IngredientService.create(request.body);
            return response.json(created_ingredient)
        } catch(e) {
            return next(e.detail)
        }
    }
}

module.exports = new IngredientController();