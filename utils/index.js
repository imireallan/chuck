const axios = require("axios");

const basePath = "https://api.chucknorris.io/jokes";

module.exports = async (category) => {
    try {
        const res = {
            data: null,
        };
        if (!category) {
            const response = await axios.get(`${basePath}/categories`);
            res.data = response.data;
        } else {
            const response = await axios.get(
                `${basePath}/random?category=${category}`
            );
            res.data = response.data;
        }
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
