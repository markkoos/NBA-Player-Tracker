const mongoose = require('mongoose');

// mongodb://127.0.0.1:27017 (add database name)
mongoose.connect('mongodb+srv://markkoos:Grill12g!@cluster0.ltis3af.mongodb.net/nbaplayertracker?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = mongoose.connection;

