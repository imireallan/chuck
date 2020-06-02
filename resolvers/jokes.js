const {useAxios} = require("../utils");

module.exports = {
    Query: {
        jokes: (_, { category }) => useAxios(category),
    },
};
