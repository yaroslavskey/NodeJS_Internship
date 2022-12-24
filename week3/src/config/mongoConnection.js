const mongoose = require('mongoose');

require('dotenv').config();
 

module.exports = () => {
    mongoose
        .connect(process.env.MONGODB_URI, {
            dbName: process.env.DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Connect MongoDB, node_user'))
        .catch((error) => console.log(error));

    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to db ...');
    });

    mongoose.connection.on('error', (err) => {
        console.log(err.message);
    });

    mongoose.connection.once('open', () => {
        console.log('Mongoose connected is open')
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose connected is disconnected')
    });
};
