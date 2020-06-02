const axios = require("axios");
const mongoose = require('mongoose');

const basePath = "https://api.chucknorris.io/jokes";

const useAxios = async (category) => {
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

const mongoConnection = async () => {
	try {
        await mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully.....');
	} catch (error) {
		console.log(error);
		throw error;
	}
};

module.exports = {
    mongoConnection,
    useAxios

}
