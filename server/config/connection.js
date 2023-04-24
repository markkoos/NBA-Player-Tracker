const mongoose = require('mongoose');

// mongodb://127.0.0.1:27017 (add database name)
mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.ltis3af.mongodb.net/${process.env.USER_DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = mongoose.connection;

