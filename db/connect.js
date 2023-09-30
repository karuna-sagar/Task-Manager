const mongoose = require('mongoose');
// const USERNAME=sagar
// const PASSWORD=123456
const connectDB = (url) => {
    return mongoose
        .connect(url)
        .then(() => console.log('Database connected'))
        .catch((err) => console.log(err));
}

module.exports = connectDB;