const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
    player_id: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name : {
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