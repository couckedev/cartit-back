const Validator = require("./Validator");

class RecipeCreateValidator {
    async validate(request,response,next) {
        const recipe = request.body;
        if(Validator.isEmpty(recipe)) {
            return next('Aucune recette renseignée !');
        }
        if(!recipe.hasOwnProperty('name')) {
            return next('La recette envoyée est incorrecte !');
        }
        return next();
    }    
}

module.exports = new RecipeCreateValidator();