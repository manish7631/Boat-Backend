let mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect( 
        "mongodb+srv://root:root@cluster0.zyjnrl8.mongodb.net/Boat"
    );
};

module.exports = connect;