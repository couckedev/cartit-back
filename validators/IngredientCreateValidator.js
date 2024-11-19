const Validator = require("./Validator");

class IngredientCreateValidator {
    async validate(request,response,next) {
        const ingredient = request.body;
        if(Validator.isEmpty(ingredient)) {
            return next('Aucun ingrédient renseigné !');
        }
        if(!ingredient.hasOwnProperty('name')) {
            return next('L\'ingrédient envoyé est incorrect !');
        }
        return next();
    }    
}

module.exports = new IngredientCreateValidator();