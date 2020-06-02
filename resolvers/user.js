const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { combineResolvers } = require("graphql-resolvers");

const User = require("../database/models/user");
const { isAuthenticated } = require("./middleware");

// Two types of resolvers
// 1. Query level resolvers
// 2. Field level resolvers
// field level resolvers are given the high priority by the graphql runtime

module.exports = {
    Query: {
        user: combineResolvers(isAuthenticated, async (_, __, { email }) => {
            try {
                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error("User not found!");
                }
                return user;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }),
    },
    Mutation: {
        signUp: async (_, { input }) => {
            try {
                const user = await User.findOne({ email: input.email });
                if (user) {
                    throw new Error(
                        `User with ${input.email} already exists. Please use another email address.`
                    );
                }
                const hashedPassword = await bcrypt.hash(input.password, 12);
                const newUser = new User({
                    ...input,
                    password: hashedPassword,
                });
                return await newUser.save();
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        login: async (_, { input }) => {
            try {
                // check if user exist in the Db
                const user = await User.findOne({ email: input.email });

                if (!user) {
                    throw new Error(
                        "User does not exist. Please signUp first."
                    );
                }

                // validate password
                const isPasswordCorrect = await bcrypt.compare(
                    input.password,
                    user.password
                );

                if (!isPasswordCorrect) {
                    throw new Error("The password entered is incorrect.");
                }
                const secret = process.env.JWT_SECRET_KEY || "mysecretkey";
                const token = jwt.sign({ email: input.email }, secret, {
                    expiresIn: "1d",
                });
                return { token };
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
};
