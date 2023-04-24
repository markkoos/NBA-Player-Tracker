const { AuthenticationError } = require('apollo-server-express');
const { User, Players } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // query to find a user
        me: async (parent, {_id}) => {
            // if id doesn't exist assign params to an empty object
            const params = _id ? {_id} : {};

            // returns user that matches the id
            return User.findOne(params);
        },
    },
    Mutation: {
        // creates user, assigns token, then returns both user and token
        addUser: async (parent, args) => {
            const user = await User.create(args);

            // creates encrypted token with user info
            const token = signToken(user);

            // returns both user and token 
            return { user, token };
        },
        login: async (parent, { email, password }) => {
            // finds user by email
            const user = await User.findOne({ email });

            // if no user matches the email; sends an error message
            if (!user) {
                throw new AuthenticationError('No user with that email was found!');
            };

            // checks that the password is correct
            const correctPass = await user.isCorrectPassword(password);

            // if pass is incorrect; send an error message
            if (!correctPass) {
                throw new AuthenticationError('Password was incorrect! Please try again');
            };

            // if login information is correct, creates encrypted token with information
            const token = signToken(user);

            // returns both user and token
            return { user, token };
        },
    }
}

]=