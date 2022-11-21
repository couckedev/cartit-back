const RecipeService = require('../services/RecipeService')

class RecipeController {
    async create(request,response) {
        try{
            const created_recipe = await RecipeService.create(request.body)
            return response.json(created_recipe)
        } catch(e) {
            return next(e.detail)
        }
    }
}

module.exports = new RecipeController();