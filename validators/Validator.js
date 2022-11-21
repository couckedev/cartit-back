class Validator {
    isEmpty(data) {
        return data.length <= 0 || JSON.stringify(data) === '{}';
    }
}

module.exports = new Validator();