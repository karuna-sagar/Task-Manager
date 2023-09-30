const mongoose = require('mongoose');
const DATABASE_LOCAL = 'mongodb://localhost:27017';
// const USERNAME=sagar
// const PASSWORD=123456
const connectDB = (url) => {
    return mongoose
        .connect(DATABASE_LOCAL)
        .then(() => console.log('Database connected'))
        .catch((err) => console.log(err));
}

module.exports = connectDB;