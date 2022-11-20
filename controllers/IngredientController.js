const IngredientService = require('../services/IngredientService')

class IngredientController {
    async create(request,response) {
        try{
            await IngredientService.create(request.body);
            return response.json("Hello world !")
        } catch(e) {
            return response.status(500).send(e.detail)
        }
    }
}

module.exports = new IngredientController();