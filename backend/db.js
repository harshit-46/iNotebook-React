const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017";
const connectToMongo = () => {
    mongoose.connect(mongoURI)
    .then((success) => console.log("Connected to Mongo successfully"))
    .catch((err) => console.log(err.message));
}

module.exports = connectToMongo;