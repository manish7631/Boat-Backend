let mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect( 
        "mongodb://localhost:27017/Boat"
    );
};

module.exports = connect;