const mongoose = require('mongoose');

// mongodb://127.0.0.1:27017 (add database name)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nbaplayertracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = mongoose.connection;
