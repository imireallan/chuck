const jokesResolver = require("./jokes");
const categoriesResolver = require("./categories");
const userResolver = require('./user');

module.exports = [jokesResolver, categoriesResolver, userResolver];
