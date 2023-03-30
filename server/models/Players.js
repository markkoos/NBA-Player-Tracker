const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName : {
        type: String,
        required: true,
        trim: true,
    },
    
},
{
    toJSON: {
        getters: true,
      },
      id: false,
},)

const Players = model('Players', playerSchema);

module.exports = Players;