const RecipeService = require('../services/RecipeService')

class RecipeController {
    async create(request,response,next) {
        try{
            const created_recipe = await RecipeService.create(request.body)
            return response.json(created_recipe)
        } catch(e) {
            return next(e.detail)
        }
    }

    async add(request,response,next) {        
        try{
            const recipe_ingredient = await RecipeService.add(parseInt(request.params.recipe_id),request.body)
            return response.json(recipe_ingredient)
        } catch(e) {
            return next(e.detail)
        }
    }
}

module.exports = new RecipeController();