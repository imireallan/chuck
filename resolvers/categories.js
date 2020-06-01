const useAxios = require("../utils");

module.exports = {
    Query: {
        categories: async () => await useAxios(),
    },
};
