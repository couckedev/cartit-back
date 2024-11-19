const Validator = require("./Validator");

class RecipeAddValidator {
    async validate(request,response,next) {
        const recipe = request.body;
        if(isNaN(parseInt(request.params.recipe_id))) {
            return next('Le paramètre recette_id est incorrect !');            
        }
        if(Validator.isEmpty(recipe)) {
            return next('Aucune recette renseignée !');
        }
        if(!recipe.hasOwnProperty('ingredient_id')) {
            return next('Aucun ingrédient à ajouter !');
        }
        if(!recipe.hasOwnProperty('quantity')) {
            return next('Veuillez préciser la quantité !');
        }
        return next();
    }    
}

module.exports = new RecipeAddValidator();