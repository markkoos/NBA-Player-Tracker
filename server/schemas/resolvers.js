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
        login: async (parent, { username, password }) => {
            // finds user by username
            const user = await User.findOne({ username });

            // if no user matches the username; sends an error message
            if (!user) {
                throw new AuthenticationError('No user with that username was found!');
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
        addPlayer: async (parent, { _id, input }) => {
            // finds user based on id then adds player info into players array
            const addedPlayer = await User.findOneAndUpdate(
                {_id: _id },
                { $push: { players: input }},
                { new: true, runValidators: true },
            );

            // returns the user with the added Player
            return addedPlayer;
        }, 
    }
}

module.exports = resolvers;