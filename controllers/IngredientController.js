const IngredientService = require('../services/IngredientService')

class HomeController {
    async index(request,response) {
        IngredientService.create();
        return response.json("Hello world !")
    }
}

module.exports = new HomeController();