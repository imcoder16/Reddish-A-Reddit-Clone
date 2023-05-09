const mongoose = require('mongoose');
const { MONGODB_URI: url } = require('./utils/config/config.env');

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://imcoder:passwordcoder@cluster0.fqff5ny.mongodb.net/Reddish?retryWrites=true&w=majority", {
      useNewUrlParser: true
    });

    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error(`Error while connecting to MongoDB: `, error.message);
  }
};

module.exports = connectToDB;
