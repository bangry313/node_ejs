const mongoose = require("mongoose");
require("dotenv").config();

// Database 연결
const dbConnect = async () => {
    try {
        console.log(process.env.DB_CONNECT);
        const connection = await mongoose.connect(process.env.DB_CONNECT);
        console.log("Database Connected!!!");
    } catch (error) {
        console.log(error);
    }
}

//dbConnect();

module.exports = dbConnect;

